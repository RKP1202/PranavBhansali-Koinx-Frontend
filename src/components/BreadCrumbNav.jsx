import React from 'react';

const BreadCrumbNav = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center text-sm text-gray-500">
        <span>Cryptocurrencies</span>
        <span className="mx-2">&gt;&gt;</span>
        <span className="text-gray-900">Bitcoin</span>
      </div>
    </div>
  );
};

export default BreadCrumbNav;