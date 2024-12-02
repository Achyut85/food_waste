import React from "react";

const BeforeAfterSection = () => {
  const stats = [
    {
      title: "50%",
      description: "average time saved",
      icon: "⏱️", // Replace with SVG or actual icon
    },
    {
      title: "758.23%",
      description: "median customer ROI",
      icon: "💵", // Replace with SVG or actual icon
    },
    {
      title: "35%",
      description: "average food waste reduced",
      icon: "📊", // Replace with SVG or actual icon
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Before and after TotalCtrl</h2>
        <p className="text-gray-600 mb-10">
          From small and medium hotels and restaurants, our customers have one
          thing in common. The value they get from our digital inventory count
          solution.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              {/* Icon (Replace with SVG or image) */}
              <div className="text-green-500 text-5xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold">{stat.title}</h3>
              <p className="text-gray-600 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded shadow">
          Start your FREE 30-day trial
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
