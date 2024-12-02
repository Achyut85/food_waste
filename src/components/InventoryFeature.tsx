import React from "react";
import phone from "../assets/phone.webp"

const InventoryFeature: React.FC = () => {
  return (
    <div className="bg-green-50 py-44 px-10 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center">
        {/* Left Text Section */}
        <div className="lg:w-2/4 mx-10 text-center lg:text-left">
          <h2 className="text-7xl py-8 sm:text-5xl font-bold text-gray-900">
            Designed to maximise speed and easiness of data input
          </h2>
          <div className="mt-6 space-y-8">
            <div >
              <h3 className="text-2xl font-semibold text-gray-900">
                Modern and intuitive interface
              </h3>
              <p className="mt-2 text-gray-700">
                We know that every second of your time counts. Clean and
                user-friendly interface makes entering and managing the
                inventory count data a breeze.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Accelerating your workflow
              </h3>
              <p className="mt-2 text-gray-700">
                Keep track of counted and uncounted items, mark several things
                at once as out of stock, filter items by inventory or category,
                and much more.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InventoryFeature;
