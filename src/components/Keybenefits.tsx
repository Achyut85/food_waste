import React from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Save time and money",
      description: "Reduce time spent on inventory count by 60% and cut costs.",
      icon: img1
    },
    {
      title: "Get control (TotalCtrl)",
      description:
        "Gain detailed insight into your inventory with up-to-date reports.",
      icon: img2
    },
    {
      title: "User-friendly and fast",
      description: "Intuitive design requiring minimal training.",
      icon:img3
    },
  ];

  return (
    <div className="bg-stone-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold p-10 mb-8">Key benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center py-10 space-y-4"
            >
              {/* Replace emoji with SVG */}
              <div className="text-green-500 py-3 ">{benefit.icon}</div>
              <h3 className="text-3xl font-semibold py-3">{benefit.title}</h3>
              <p className="text-gray-600 py-3">{benefit.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded shadow">
          Start your FREE 30-day trial
        </button>
      </div>
    </div>
  );
};

export default KeyBenefits;
