import { useState, useEffect } from 'react';

const CG_TRENDING_COINS_API_URL = "https://api.coingecko.com/api/v3/search/trending";

const useFetchTrendingCoins = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await fetch(CG_TRENDING_COINS_API_URL);
                const data = await response.json();
                setTrendingCoins(data.coins);
            } catch (error) {
                console.error("Error fetching trending coins:", error);
            }
        };
        
        fetchTrendingCoins();
    }, []);

    return trendingCoins;
};

export default useFetchTrendingCoins;
