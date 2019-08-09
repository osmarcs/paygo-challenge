import { http, getBaseURL } from './api';

describe('Testing API Service', () => {
  global.fetch = jest.fn();

  it('should be fetch called with url', async () => {
    const url = 'test';
    const expectedUrl = `${getBaseURL()}/${url}`;
    http(url);
    expect(fetch).toBeCalledWith(expectedUrl, undefined);
  });
  it('should be fetch called with url what start http', async () => {
    const url = 'http://google.com.';
    http(url);
    expect(fetch).toBeCalledWith(url, undefined);
  });
});
