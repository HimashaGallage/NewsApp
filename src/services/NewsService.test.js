import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchNewsList } from './NewsService';

const mock = new MockAdapter(axios);

describe('fetchNewsList', () => {
  afterEach(() => {
    mock.reset();
  });

  test('fetches successfully data from an API', async () => {
    const newsData = { news: [{ id: 1, title: 'News Title 1' }] };
    mock.onGet(process.env.API_URL).reply(200, newsData);
    const result = await fetchNewsList();
    expect(result).toEqual(newsData.news);

  });

  test('fetches erroneously data from an API', async () => {
    mock.onGet(process.env.API_URL).reply(404);
    await expect(fetchNewsList()).rejects.toThrow('Request failed with status code 404');
  });
});