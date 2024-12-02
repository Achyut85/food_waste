import { useState, useEffect } from "react";
import axios from "axios";
import { useRazorpay } from "react-razorpay";

const API_URL = "http://192.168.43.221:8000/";
const token = localStorage.getItem("token");

const FoodMenu = ({setProfile}) => {
  const { Razorpay, isLoading } = useRazorpay();
  const [foodItem, setFoodItem] = useState([]); // Food items
  const [price, setPrice] = useState(0);
  const [foodDetails, setFoodDetails] = useState({
    // Initially set to 0, will update on dish selection
    seller: "",
    quantity: "",
    food_item_id: "",
    food_item_name: "",

  });

  // Function to complete the order after payment
  const complete_order = (
    paymentID,
    orderID,
    signature,
    seller,
    quantity,
    foodItemId,
    foodItemName,
    price
  ) => {
    axios({
      method: "post",
      url: `${API_URL}/api/v1/razorpay/order/complete/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        amount: price * 100,
        seller: seller,
        quantity: quantity,
        food_item_id: foodItemId,
        food_item_name: foodItemName,
      },

    })
      .then((response) => {
        console.log("Order Completed:", response.data);
      })
      .catch((error) => {
        console.error("Error Completing Order:", error.response?.data || error);
      });
  };

  // Razorpay payment initiation
  const razorPay = () => {

    axios({
      method: "post",
      url: `${API_URL}api/v1/razorpay/order/create/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        amount: price * 100, // Pass the updated amount
        currency: "INR",
      },
    })
      .then((response) => {
        const order_id = response.data.data.id; // Get order ID from response

        const options = {
          key: "rzp_test_P6b1PCMzaOdS6T", // Replace with your Razorpay key
          amount: price * 100, // Amount in paise
          currency: "INR",
          name: "Bell Fresh",
          description: `Purchase of ${foodDetails.food_item_name}`,
          order_id: order_id,
          handler: (response) => {
            console.log("Payment Response:", response);
            complete_order(
              response.razorpay_payment_id,
              order_id,
              response.razorpay_signature,
              foodDetails.seller,
              foodDetails.quantity,
              foodDetails.food_item_id,
              foodDetails.food_item_name,
              price
            );
            alert("Payment Successful!");
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };

        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
      })
      .catch((error) => {
        console.error("Error Creating Order:", error.response?.data || error);
      });
  };

  // Fetch food items
  useEffect(() => {
    const fetchInventory = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${API_URL}api/v1/stock/list-menu/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFoodItem(response.data.results);
      } catch (error) {
        console.error("Error Fetching Food Items:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen overflow-hidden">
      <div className="flex-1">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
          <div>
            <h1 className="text-2xl font-bold text-green-500">Bell Fresh</h1>
            <p className="text-gray-600">Fresh & Healthy Food Recipe</p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-xl font-bold">{foodItem.length}</p>
                <span className="text-gray-500">Total Items</span>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">4</p>
                <span className="text-gray-500">Restaurants</span>
              </div>
            </div>
            <div className="flex items-center gap-4" role="button"
              onClick={ 
                () => {
                    setProfile("profile")
                }
              } 
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <p className="font-semibold text-gray-700">John Doe</p>
            </div>
          </div>
        </header>

        {/* Popular Dishes */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-xl font-semibold mb-4">Popular Dishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foodItem.map((dish, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 shadow-sm transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`${API_URL}${dish.image}`}
                  alt={dish.name}
                  className="w-full h-24 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-medium">{dish.name}</h3>
                <p className="text-gray-500 text-sm">
                  {dish.serving_size} persons
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-500 font-bold">
                    Rs {dish.price_per_serving}
                  </span>
                  <button
                    className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 transition"
                    onClick={() => {
                      // Set the food details when the user selects a dish
                      const updatedDetails = {
                        // Set the selected dish price
                        seller: dish.client,
                        quantity: dish.serving_size,
                        food_item_id: dish.id,
                        food_item_name: dish.name,

                      };

                      setFoodDetails(updatedDetails);
                      setPrice(dish.price_per_serving); // Update price for payment

                      razorPay(); // Initiate payment
                    }}
                    disabled={isLoading}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodMenu;
