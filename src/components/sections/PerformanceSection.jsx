import React from 'react';

const PerformanceSection = () => {
    const todayData = {
        low: '46,930.22',
        high: '46,930.22',
        current: '$46,627.83'
    };

    const weekData = {
        low: '46,930.22',
        high: '46,930.22'
    };

    return (
        <div className="bg-white p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-6">Performance</h2>

            {/* Today's Range */}
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Today's Low</span>
                    <span>Today's High</span>
                </div>
                <div className="relative">
                    <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
                    <div className="flex justify-between mt-1">
                        <span className="text-sm">{todayData.low}</span>
                        <span className="absolute left-1/2 transform -translate-x-1/2 text-sm">
                            {todayData.current}
                        </span>
                        <span className="text-sm">{todayData.high}</span>
                    </div>
                </div>
            </div>

            {/* 52W Range */}
            <div>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>52W Low</span>
                    <span>52W High</span>
                </div>
                <div className="relative">
                    <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full" />
                    <div className="flex justify-between mt-1">
                        <span className="text-sm">{weekData.low}</span>
                        <span className="text-sm">{weekData.high}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceSection;