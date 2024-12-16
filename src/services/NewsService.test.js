import axios from 'axios';
import NewsService from './NewsService';
import { ERROR_MESSAGES } from '../utils/strings';

jest.mock('axios');

describe('NewsService', () => {
  const BASE_URL = process.env.REACT_APP_FINNHUB_API_URL;
  const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
  const mockNewsData = [{ headline: 'Market rises', category: 'general' }];
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchMarketNews', () => {
    it('should fetch market news successfully', async () => {
      axios.get.mockResolvedValueOnce({ data: mockNewsData });
      const category = 'general';
      
      const result = await NewsService.fetchMarketNews(category);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/news`, {
        params: {
          category,
          token: API_KEY,
        },
      });
      expect(result).toEqual(mockNewsData);
    });

    it('should throw SERVER_ERROR when the server responds with an error', async () => {
      axios.get.mockRejectedValueOnce({
        response: { status: 500 },
      });

      await expect(NewsService.fetchMarketNews('general')).rejects.toThrow(
        ERROR_MESSAGES.SERVER_ERROR
      );
    });

    it('should throw NETWORK_ERROR when there is no response from the server', async () => {
      axios.get.mockRejectedValueOnce({
        request: {},
      });

      await expect(NewsService.fetchMarketNews('general')).rejects.toThrow(
        ERROR_MESSAGES.NETWORK_ERROR
      );
    });

    it('should throw AXIOS_ERROR for any other errors', async () => {
      axios.get.mockRejectedValueOnce(new Error('Something went wrong'));

      await expect(NewsService.fetchMarketNews('general')).rejects.toThrow(
        ERROR_MESSAGES.AXIOS_ERROR
      );
    });
  });
});
