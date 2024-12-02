import { useState, useEffect } from "react"
import { EditIcon, ThreeDotIcon, DeleteIcon } from "../assets/icons"
import ExcelUploader from "./ExcelUpload"
import axios from "axios"

const API_URL = "http://192.168.43.221:8000/"
const InentoriesTable = ({ setTotalValue, setNumberItem, option }) => {
   const [activeThreeDot, setActiveThreeDot] = useState({ id: null, active: false })
   const [expire, setExpire] = useState(0)


   const Items = [
      {
         id: 1,
         itemName: "Milk Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800 ",
      },
      {
         id: 2,
         itemName: "Almond Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 3,
         itemName: "Almond Drink",
         expirationDate: "3 May 2022",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 4,
         itemName: "Almond Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 5,
         itemName: "Almond Drink",
         expirationDate: "3 May 2020",
         quantity: 35,
         totalValue: "135800",
      },
   ];
   const [InventoryItem, setInventoryItem] = useState(Items);
   const [sortItem, setSortItem] = useState(Items)


   useEffect(() => {
      const fetchInventory = async () => {
         const token = localStorage.getItem('token');

         if (!token) {
            console.log("Token not found");
            return;
         }

         let endPoint = "list-raw-material/";
         if (option === "All raw materials Items") {
            endPoint = "list-raw-material/";
         } else if (option === "Restaurant menu") {
            endPoint = "list-menu/";
         } else {
            endPoint = "list-menu/";
         }

         try {
            const response = await axios.get(`${API_URL}api/v1/stock/${endPoint}`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });

            setInventoryItem(response.data.results);
            setNumberItem(response.data.results.length);

            if (option === 'All raw materials Items' && response.data.results.length > 0) {
               // Extract the first raw material item (potato in this case)
               const { name, temperature, humidity, pH, microbial_count } = response.data.results[0];

               try {
                  const res = await axios.post(
                     `https://arbazkhan-cs-vegetable-expiry-date-predictor.hf.space/predict`,
                     {
                        name: name.toLowerCase(),  // assuming name is in lowercase
                        temperature: temperature,
                        Humidity: humidity,
                        pH: pH,
                        microbial_count: microbial_count
                     }
                  );
                  setExpire(res.data.days_to_expire);
                  console.log("Response:", res); // Handle response
               } catch (error) {
                  console.error("Error posting data:", error);
               }
            }
         } catch (error) {
            console.log("Something is wrong:", error);
         }
      };

      fetchInventory();
   }, [option]);

   console.log(InventoryItem);

   useEffect(() => {
      // Sort items by date
      const sorted = [...InventoryItem].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
      setSortItem(sorted);

   }, [InventoryItem]);


   useEffect(() => {
      const totalValue = sortItem.reduce((acc, item) => acc + Number(item.price_per_serving), 0);
      setTotalValue(totalValue)
   }, [sortItem])

   const handleThreeDotToggle = (id) => {
      setActiveThreeDot((prevState) => ({
         id: prevState.id === id ? null : id,
         active: prevState.id === id ? false : true,
      }));
   };

   const closeThreeDotMenu = () => {
      setActiveThreeDot({
         id: null,
         active: false,
      });
   };
   const DeleteItem = (id) => {
      setInventoryItem((prevItems) => prevItems.filter((item) => item.id !== id));
   };

   return (

      <div className="flex flex-col h-full " >
         <div className="grid grid-cols-6  border-b border-t border-purple-100 py-4 px-8 text-sm font-bold max-md:hidden  ">
            <span className="text-center">ITEM NAME</span>
            <span className="text-center">QUANTITY</span>
            <span className="text-center">TOTAL VALUE</span>
            <span className=" text-center">DAYS TO EXPIRE</span>
         </div>

         <div className="w-full ">
            {
               sortItem.map((item) => (
                  <div className=" grid  grid-cols-6 p-8 border-b border-t  text-sm gap-2" key={item.id}>
                     <span className="text-center "> <span className="hidden max-md:block font-bold text-gray-600">Item</span> {item.name} </span>
                     <span className=" text-center"> <span className="hidden max-md:block font-bold text-gray-600">Qty</span> {item.total_weight || item.weight}</span>
                     <span className="text-center"> <span className="hidden max-md:block font-bold text-gray-600">Value</span> {item.price_per_serving}</span>
                     <span className="text-center">  <span className="hidden max-md:block font-bold text-gray-600">Exp Date</span> {item.expired_at || option === 'All raw materials Items' && expire + 1}</span>
                     <div className="flex items-center gap-16 text-lg max-md:hidden relative text-center ml-4">

                        <span role="button">
                           <EditIcon />
                        </span>


                        <span
                           role="button"
                           onClick={() =>
                              handleThreeDotToggle(item.id)
                           }
                        >
                           <ThreeDotIcon />
                        </span>


                        <span
                           className={`${activeThreeDot.id === item.id && activeThreeDot.active
                              ? "block"
                              : "hidden"
                              } absolute p-2 bg-white top-5 left-5 text-sm flex items-center gap-1 shadow-md rounded-sm`}
                           role="button"
                           onClick={() => {

                              DeleteItem(item.id)
                           }}
                        >
                           <DeleteIcon /> Delete
                        </span>
                     </div>

                  </div>
               ))

            }
         </div>



      </div>
   )
}

export default InentoriesTable