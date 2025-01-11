import React from 'react';
import useFetchBitcoinPrice from '../../hooks/useFetchBitcoinPrice.js';
import bitcoinImg from "../../assets/bitcoin-logo.svg";
const BitcoinPriceSection = () => {

  return (
    <div className="flex gap-2 items-center">
      <img className="w-7 h-7" src={bitcoinImg} />
      <h3 className="font-semibold text-xl">Bitcoin</h3>
      <span className="uppercase text-gray-500 text-[12px] font-semibold">BTC</span>
      <span className="text-white bg-[#768396] rounded-lg py-2 px-2 text-sm ml-4">Rank #1</span>
    </div>
  );
};

export default BitcoinPriceSection;
