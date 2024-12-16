import { createSlice } from '@reduxjs/toolkit';
import NewsService from '../../services/NewsService';

const newsSlice = createSlice({
  name: 'newsList',
  initialState: {
    loading: false,
    newsList: [],
    error: '',
  },
  reducers: {
    fetchNewsRequest: (state) => {
      state.loading = true;
    },
    fetchNewsSuccess: (state, action) => {
      state.loading = false;
      state.newsList = action.payload;
      state.error = '';
    },
    fetchNewsFailure: (state, action) => {
      state.loading = false;
      state.newsList = [];
      state.error = action.payload;
    },
  },
});

export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;

export const fetchNewsList = (newsCategory) => {
  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const newsArray = await NewsService.fetchMarketNews(newsCategory);
      dispatch(fetchNewsSuccess(newsArray));
    } catch (error) {
      // Dispatch the error message
      dispatch(fetchNewsFailure(error.message)); 
    }
  };
};

export default newsSlice.reducer;
