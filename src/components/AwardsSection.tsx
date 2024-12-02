import React from 'react';
// import { CheckCircleIcon } from '@heroicons/react/outline'; // Optional icon
import { CheckCircleIcon } from '@heroicons/react/16/solid';

const AwardsSection: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Award-winning */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Donate Food</h3>
            <p className="text-gray-700">Winner of over 50 industry awards</p>
          </div>
        </div>

        {/* Certified */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Certified</h3>
            <p className="text-gray-700">Certified B corporation</p>
          </div>
        </div>

        {/* Funded */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-2 rounded-full">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Funded</h3>
            <p className="text-gray-700">Funded by the European Union</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
