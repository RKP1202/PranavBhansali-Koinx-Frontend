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
import GetStartedCard from './components/GetStartedCard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <BreadCrumbNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <BitcoinPriceSection />
              <TradingViewChart />
            </div>
          </div>
          <div>
            <GetStartedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;