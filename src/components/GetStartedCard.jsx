import React from 'react';

const GetStartedCard = () => {
  return (
    <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Get Started with KoinX
        <br />
        for FREE
      </h2>
      <p className="mb-8">
        With our range of features that can equip for free, KoinX allows you to be more educated
        and aware of your tax reports
      </p>
      <img
        src="/api/placeholder/240/160"
        alt="KoinX Features"
        className="mx-auto mb-6"
      />
      <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center w-full">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default GetStartedCard;