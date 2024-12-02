import React from "react";


const InventoryToolInfo: React.FC = () => {
  return (
    <div className="bg-white flex py-24 flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-10xl font-bold text-center text-gray-900">
        What makes this tool so powerful?
      </h1>
      <p className="mt-4 text-xl text-center text-gray-600">
        It offers unmatched efficiency and value in the market.
      </p>
      <div className="mt-8 w-full max-w-3xl">
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-block bg-green-100 text-green-600 p-2 rounded-full">
                ✓
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-900">Easy to use</h3>
              <p className="mt-1 text-gray-600">Fast and simple to use.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-block bg-green-100 text-green-600 p-2 rounded-full">
                ✓
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-900">Scalable</h3>
              <p className="mt-1 text-gray-600">Easily expands with your needs.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-block bg-green-100 text-green-600 p-2 rounded-full">
                ✓
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-900">Proven results</h3>
              <p className="mt-1 text-gray-600">
                Reduces the time you spend on inventory counts by 50% and cuts
                your food waste by 35% in just one month.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0">
              <span className="inline-block bg-green-100 text-green-600 p-2 rounded-full">
                ✓
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Cheaper than other solutions
              </h3>
              <p className="mt-1 text-gray-600">30-Day Money-Back Guarantee.</p>
            </div>
          </li>
        </ul>
      </div>
      <button
        className="mt-8 px-8 py-5 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        onClick={() => alert("Tips for efficient inventory count coming soon!")}
      >
        Tips for efficient inventory count
      </button>
    </div>
  );
};

export default InventoryToolInfo;
