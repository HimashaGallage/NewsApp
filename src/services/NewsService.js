import axios from 'axios';
import { ERROR_MESSAGES } from '../utils/strings'

const BASE_URL = process.env.REACT_APP_FINNHUB_API_URL;
const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;

if (!BASE_URL || !API_KEY) {
  throw new Error(ERROR_MESSAGES.MISSING_ENV);
}

const NewsService = {
  fetchMarketNews: async (newsCategory) => {
    try {
      const response = await axios.get(`${BASE_URL}/news`, {
        params: {
          category: newsCategory,
          token: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
        if (error.response) {
          throw new Error(ERROR_MESSAGES.SERVER_ERROR);
        } else if (error.request) {
          throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
        } else {
          throw new Error(ERROR_MESSAGES.AXIOS_ERROR);
        }
    }
  },
};

export default NewsService;
