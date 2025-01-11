import { useState, useEffect } from 'react';

const useFetchBitcoinPrice = () => {
    const [priceData, setPriceData] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
                );
                const data = await response.json();
                setPriceData(data.bitcoin);
            } catch (error) {
                console.error('Error fetching price:', error);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 30000);
        return () => clearInterval(interval);
    }, []);

    return priceData;
};

export default useFetchBitcoinPrice;
