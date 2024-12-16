import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_URL = 'https://finnhub.io/api/v1/news?category=general';

const NewsService = {
    /**
     * Fetches a list of news articles from the Finnhub API.
     * @returns {Promise<Array>} A promise that resolves to an array of news articles.
     * @throws {Error} Throws an error if the fetch fails.
     */
    fetchMarketNews: async () => {
        try {
            const apiKey = process.env.FINNHUB_API_KEY; 
            console.log('API Key:', apiKey); // For debugging purposes, remove in production

            const response = await axios.get(API_URL, {
                headers: {
                    'X-Finnhub-Token': apiKey
                }
            });
            return response.data; // Return only the data from the response
        } catch (error) {
            throw new Error(`Failed to fetch news: ${error.message}`);
        }
    },
};

export default NewsService;