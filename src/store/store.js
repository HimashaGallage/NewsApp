import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsReducer';

const store = configureStore({
  reducer: {
    newsList: newsReducer,
  },
});

export default store;