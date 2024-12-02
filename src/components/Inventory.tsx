import React from "react";
// import video from "../assets/02-How-to-import-your-inventory.mp4";
import Map from "../assets/Screenshot 2024-12-01 at 6.09.33 PM.png"
import video1 from "../assets/03-How-to-count-inventory-1.mp4";
import video2 from "../assets/04-Get-the-inventory-count-report.mp4";

const InventoryPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col pb-28 ">
            {/* Header Section */}
            <header className="text-center py-10">
                <h1 className="text-6xl font-bold">How it works</h1>
                <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iste.</p>
            </header>

            {/* Step Section */}
            <div className="flex justify-center mb-32">
                <section className="flex w-4/5  justify-between items-center">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">See Live Location</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusamus dolores possimus tenetur cumque sed, accusantium quibusdam molestias optio culpa.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Start your FREE 30-day Food Donation
                        </button>
                    </div>
                    <div>
                        {/* <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                        <img src={Map} alt=""
                        className="rounded-lg shadow-lg max-w-full"
                        width="640"
                        height="360" />
                    </div>
                </section>
            </div>
            <div className="flex justify-center mb-32">
                <section className="flex w-4/5  justify-between items-center">

                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Donate Food</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, harum? Adipisci quam quod voluptatum aliquid. Laboriosam blanditiis eos amet maxime.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Start your FREE 30-day Food Donation
                        </button>
                    </div>

                </section>
            </div>
            <div className="flex pb-32 justify-center">
                <section className="flex w-4/5  justify-between items-center">
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Sell Food on Discount</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusantium nesciunt ex culpa magni possimus porro optio accusamus libero blanditiis!
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Sell Food
                        </button>
                    </div>
                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
            <div className="flex justify-center mb-32">
                <section className="flex w-4/5  justify-between items-center">

                    <div>
                        <video
                            autoPlay 
                            loop
                            muted 
                            playsInline 
                            className="rounded-lg shadow-lg max-w-full"
                            width="640"
                            height="360"
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div>
                        <div className="flex items-center mb-8">
                            <div className="bg-green-100 text-green-600 font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl">
                                1
                            </div>
                            <h2 className="text-4xl font-semibold ml-4">Expiry Date Prediction</h2>
                        </div>
                        <p className="text-gray-600  px-4 max-w-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, harum? Adipisci quam quod voluptatum aliquid. Laboriosam blanditiis eos amet maxime.
                        </p>
                        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded shadow">
                            Check Expiry
                        </button>
                    </div>

                </section>
            </div>


        </div>
    );
};

export default InventoryPage;
