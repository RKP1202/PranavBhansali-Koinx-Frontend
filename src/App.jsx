// import React from 'react'
// import Navbar from './components/Navbar'
// import BreadCrumbNav from './components/BreadCrumbNav'
// import BitcoinPriceSection from './components/sections/BitcoinPriceSection'
// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <BreadCrumbNav/>
//       <BitcoinPriceSection/>
//     </>
//   )
// }

// export default App

import React from 'react';
import Navbar from './components/Navbar';
import BreadCrumbNav from './components/BreadCrumbNav';
import BitcoinPriceSection from './components/sections/BitcoinPriceSection';
import TradingViewChart from './components/TradingViewChart';
import TabNavigation from './components/TabNavigation';
import PerformanceSection from './components/sections/PerformanceSection';
import FundamentalsSection from './components/sections/FundamentalsSection';
import TrendingCoins from './components/sections/TrendingCoins';
import GetStartedCard from './components/GetStartedCard';
import SentimentSection from './components/sections/SentimentSection';
import AboutBitcoin from './components/sections/AboutBitcoin';
import TokenomicsTeamPage from './components/sections/TokenomicsTeamSection';
import Tokenomics from './components/sections/Tokenomic';
import useFetchTrendingCoins from './hooks/useFetchTrendingCoins';
import CoinsYouMayLike from './components/sections/CoinsYouMayLike';
const App = () => {

  const trendingCoins = useFetchTrendingCoins();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BreadCrumbNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow mb-6">
              <BitcoinPriceSection />
              <TradingViewChart />
            </div>
            <TabNavigation />
            <div className="mt-6">
              <PerformanceSection />
              <FundamentalsSection />
              <SentimentSection />
              <AboutBitcoin />
              <Tokenomics />
              <TokenomicsTeamPage />

              <CoinsYouMayLike coins={trendingCoins} />
              <div className="flex flex-col gap-4 lg:col-start-2 mx-6 lg:ml-0 lg:mr-16">
                <p className="text-sm hidden lg:block lg:invisible">Hidden Text</p>
                {/* <GetStartedForFree /> */}
                <TrendingCoins coins={trendingCoins} />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <GetStartedCard />
            <TrendingCoins />
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;