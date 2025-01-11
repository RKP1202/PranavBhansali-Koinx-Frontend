import React from 'react';
import useFetchBitcoinPrice from '../../hooks/useFetchBitcoinPrice.js';

const BitcoinPriceSection = () => {
  const priceData = useFetchBitcoinPrice();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold">Bitcoin Price</h1>
      <p className="text-3xl font-bold">
        ${priceData?.usd?.toLocaleString()}
      </p>
    </div>
  );
};

export default BitcoinPriceSection;
