import React from 'react';

const TradingViewChart = () => {
  return (
    <div className="w-full h-[600px] bg-white p-4">
      <div className="w-full h-full">
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_cf76c&symbol=BITSTAMP%3ABTCUSD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=%5B%5D&theme=light&style=1&timezone=Etc%2FUTC"
          title="Bitcoin Price Chart"
        />
      </div>
    </div>
  );
};

export default TradingViewChart;