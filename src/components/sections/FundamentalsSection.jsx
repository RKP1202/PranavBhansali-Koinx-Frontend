import React from 'react';
import { Info } from 'lucide-react';

const FundamentalsSection = () => {
    const fundamentalsData = {
        bitcoinPrice: '$16,815.46',
        dayRange: '$16,382.07 / $16,874.12',
        weekRange: '$16,382.07 / $16,874.12',
        tradingVolume: '$23,249,202,782',
        marketCap: '$323,507,290,047',
        marketCapRank: '#1',
        marketCapDominance: '38.343%',
        volumeMarketCap: '0.0718',
        allTimeHigh: {
            price: '$69,044.77',
            date: 'Nov 10, 2021 (about 1 year)',
            change: '-75.6%'
        },
        allTimeLow: {
            price: '$67.81',
            date: 'Jul 06, 2013 (about 9 years)',
            change: '24729.1%'
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">Fundamentals</h2>
                <Info className="text-gray-400 w-4 h-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {/* Left Column */}
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Bitcoin Price</span>
                        <span className="font-medium">{fundamentalsData.bitcoinPrice}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">24h Low / 24h High</span>
                        <span className="font-medium">{fundamentalsData.dayRange}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">7d Low / 7d High</span>
                        <span className="font-medium">{fundamentalsData.weekRange}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Trading Volume</span>
                        <span className="font-medium">{fundamentalsData.tradingVolume}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap</span>
                        <span className="font-medium">{fundamentalsData.marketCap}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Right Column */}
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap Rank</span>
                        <span className="font-medium">{fundamentalsData.marketCapRank}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Market Cap Dominance</span>
                        <span className="font-medium">{fundamentalsData.marketCapDominance}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">Volume / Market Cap</span>
                        <span className="font-medium">{fundamentalsData.volumeMarketCap}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">All Time High</span>
                        <div className="text-right">
                            <div className="font-medium">
                                {fundamentalsData.allTimeHigh.price}
                                <span className="text-red-500 ml-2">{fundamentalsData.allTimeHigh.change}</span>
                            </div>
                            <div className="text-sm text-gray-500">{fundamentalsData.allTimeHigh.date}</div>
                        </div>
                    </div>
                    <div className="flex justify-between py-3 border-b">
                        <span className="text-gray-500">All Time Low</span>
                        <div className="text-right">
                            <div className="font-medium">
                                {fundamentalsData.allTimeLow.price}
                                <span className="text-green-500 ml-2">{fundamentalsData.allTimeLow.change}</span>
                            </div>
                            <div className="text-sm text-gray-500">{fundamentalsData.allTimeLow.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundamentalsSection;