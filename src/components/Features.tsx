import React from "react";
import DonateFood from "../assets/food.png"
import LiveLocation from "../assets/live.jpg"
import SellFood from "../assets/sell.avif"
import ExpiryDate from "../assets/expire.jpg"
import Inventory from "../assets/inventiry.webp"


const FeaturesPage = () => {
  const features = [
    {
      title: "Donate Food",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum.",
      image: DonateFood, // Replace with the actual image path
    },
    {
      title: "See Live Location",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum.",
      image: LiveLocation, // Replace with the actual image path
    },
    {
      title: "Sell Food on discounted Amount",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum.",
      image: SellFood, // Replace with another image path or repeat.
    },
    {
      title: "Expiry Date Prediction",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum.",
      image: ExpiryDate, // Replace with another image path or repeat.
    },
    {
      title: "Inventory Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum. ",
      image: Inventory, // Replace with another image path or repeat.
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-500 text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Explore Our Features</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet quam a rerum. Esse nihil beatae assumenda natus eius adipisci.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center"
          >
            {/* Feature Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded-md mb-6"
            />
            {/* Feature Title */}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            {/* Feature Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center py-10">
        <button className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-8 rounded shadow-md">
          Start Your Free 30-Day Trial
        </button>
      </div>
    </div>
  );
};

export default FeaturesPage;
