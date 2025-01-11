import React from 'react';
import Section from "../utils/Section.jsx";
import { useEffect, useState } from "react";
import commaNumber from "comma-number";
import useFetchBitcoinPrice from '../../hooks/useFetchBitcoinPrice.js';
import BitcoinPriceSection from './BitcoinPriceSection.jsx';
import TradingViewChart from '../TradingViewChart.jsx';
import bitcoinImg from "../../assets/bitcoin-logo.svg";

const PerformanceSection = () => {

    const cryptoInfo = useFetchBitcoinPrice();

    return (
        <Section>
            <div className="flex gap-2 items-center">
                <img className="w-7 h-7" src={bitcoinImg} />
                <h3 className="font-semibold text-xl">Bitcoin</h3>
                <span className="uppercase text-gray-500 text-[12px] font-semibold">BTC</span>
                <span className="text-white bg-[#768396] rounded-lg py-2 px-2 text-sm ml-4">Rank #1</span>
            </div>
            <div className="grid grid-cols-crypto-info gap-x-4 gap-y-2 mt-2 items-center">
                <span className="text-2xl font-semibold">${commaNumber(cryptoInfo.dollarValue)}</span>
                <span className={`rounded-lg text-[12px] px-2 font-medium ${cryptoInfo.positiveGrowth ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>{cryptoInfo.positiveGrowth ? "▲" : "▼"} {cryptoInfo.usdChangeIn24h.toFixed(2)}%</span>
                <span>(24H)</span>
                <span className="font-medium text-base">₹{commaNumber(cryptoInfo.rupeeValue)}</span>
            </div>
            <hr />
            <TradingViewChart />
        </Section>
    )
};

export default PerformanceSection;