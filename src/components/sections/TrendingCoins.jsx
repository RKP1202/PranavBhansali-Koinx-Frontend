import React from 'react';
import { ArrowUp } from 'lucide-react';

const TrendingCoins = () => {
    const trendingCoins = [
        {
            name: 'GRIFFAIN',
            icon: 'G',
            change: '+18.48%',
            iconBg: 'bg-black'
        },
        {
            name: 'Virtuals Protocol',
            icon: 'V',
            change: '+2.26%',
            iconBg: 'bg-blue-500'
        },
        {
            name: 'Hey Anon',
            icon: 'H',
            change: '+33.03%',
            iconBg: 'bg-red-500'
        }
    ];

    return (
        <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Trending Coins (24h)</h2>
            <div className="space-y-4">
                {trendingCoins.map((coin, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 ${coin.iconBg} rounded-full flex items-center justify-center text-white`}>
                                {coin.icon}
                            </div>
                            <span className="font-medium">{coin.name}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-green-50 text-green-500 px-2 py-1 rounded">
                            <ArrowUp size={16} />
                            {coin.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCoins;