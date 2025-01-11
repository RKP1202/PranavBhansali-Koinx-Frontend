import React from 'react';
import { Info } from 'lucide-react';

const KeyEvent = ({ type, title, description }) => {
    const bgColor = type === 'positive' ? 'bg-green-50' : 'bg-blue-50';
    const iconBg = type === 'positive' ? 'bg-green-500' : 'bg-blue-500';

    return (
        <div className={`${bgColor} p-4 rounded-lg`}>
            <div className="flex gap-4">
                <div className={`${iconBg} rounded-full p-2 h-fit`}>
                    {type === 'positive' ? (
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                    )}
                </div>
                <div>
                    <h3 className="font-medium mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

const SentimentSection = () => {
    return (
        <div className="bg-white p-6 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">Sentiment</h2>
                <Info className="text-gray-400 w-4 h-4" />
            </div>

            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Key Events</h3>
                    <Info className="text-gray-400 w-4 h-4" />
                </div>
                <div className="flex flex-col md:flex-row gap-4 overflow-x-auto">
                    <KeyEvent
                        type="neutral"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque, iusto?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias asperiores corporis distinctio explicabo, facere facilis quidem ratione tempora tempore ullam."
                    />
                    <KeyEvent
                        type="positive"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atque, iusto?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias asperiores corporis distinctio explicabo, facere facilis quidem ratione tempora tempore ullam."
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">Analyst Estimates</h3>
                    <Info className="text-gray-400 w-4 h-4" />
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
                        <span className="text-3xl text-green-500 font-bold">76%</span>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <span className="text-sm w-8">Buy</span>
                                <div className="flex-1 h-2 bg-green-500 rounded-full" />
                                <span className="text-sm w-8">76%</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm w-8">Hold</span>
                                <div className="flex-1">
                                    <div className="w-[8%] h-2 bg-gray-200 rounded-full" />
                                </div>
                                <span className="text-sm w-8">8%</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm w-8">Sell</span>
                                <div className="flex-1">
                                    <div className="w-[16%] h-2 bg-red-500 rounded-full" />
                                </div>
                                <span className="text-sm w-8">16%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SentimentSection;