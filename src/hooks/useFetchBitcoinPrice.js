import { useState, useEffect } from 'react';
const COIN_GECKO_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";

const useFetchBitcoinPrice = () => {
    const [cryptoInfo, setCryptoInfo] = useState({
        dollarValue: 0,
        rupeeValue: 0,
        usdChangeIn24h: 0,
        positiveGrowth: true
    });

    useEffect(() => {
        fetch(COIN_GECKO_URL)
            .then(res => res.json())
            .then(data => {
                const bitcoinData = data.bitcoin;

                setCryptoInfo({
                    dollarValue: bitcoinData.usd,
                    rupeeValue: bitcoinData.inr,
                    usdChangeIn24h: bitcoinData.usd_24h_change,
                    positiveGrowth: bitcoinData.usd_24h_change >= 0
                })
            })
    }, []);


    return cryptoInfo;
};

export default useFetchBitcoinPrice;
