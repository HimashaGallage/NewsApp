import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import NewsFeed from './NewsFeed';
import { fetchNewsList } from '../../store/reducers/newsReducer';
import { CATEGORY } from '../../utils/enums';

// Mock dependencies
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../store/reducers/newsReducer', () => ({
  fetchNewsList: jest.fn(),
}));

jest.mock('../../components/shared/Loader/Loader', () => () => <div>Loading...</div>);
jest.mock('../../components/shared/Error/Error', () => () => <div>Error occurred</div>);
jest.mock('../../components/NewsCard/NewsCard', () => ({ newsItem }) => (
  <div data-testid="news-card">{newsItem.title}</div>
));

describe('NewsFeed Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
  });

  it('should dispatch fetchNewsList with CATEGORY.GENERAL on mount', () => {
    useSelector.mockReturnValue({
      newsList: [],
      loading: false,
      error: null,
    });

    render(<NewsFeed />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchNewsList(CATEGORY.GENERAL));
  });

  it('should display the loading component when loading is true', () => {
    useSelector.mockReturnValue({
      newsList: [],
      loading: true,
      error: null,
    });

    render(<NewsFeed />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display the error component when error is present', () => {
    useSelector.mockReturnValue({
      newsList: [],
      loading: false,
      error: 'Error message',
    });

    render(<NewsFeed />);

    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('should display news cards when newsList is populated', () => {
    const mockNewsList = [
      { id: 1, title: 'News 1' },
      { id: 2, title: 'News 2' },
    ];

    useSelector.mockReturnValue({
      newsList: mockNewsList,
      loading: false,
      error: null,
    });

    render(<NewsFeed />);

    const newsCards = screen.getAllByTestId('news-card');
    expect(newsCards).toHaveLength(2);
    expect(newsCards[0]).toHaveTextContent('News 1');
    expect(newsCards[1]).toHaveTextContent('News 2');
  });

  it('should not display news cards when newsList is empty', () => {
    useSelector.mockReturnValue({
      newsList: [],
      loading: false,
      error: null,
    });

    render(<NewsFeed />);

    expect(screen.queryByTestId('news-card')).toBeNull();
  });
});
