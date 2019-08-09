import * as Api from './api';
import { getAllChannels } from './Channel';
import mockChannels from '../api/data/channels.json';

describe('Testing Channel Service', () => {
  Api.http = jest.fn(() => Promise.resolve({ json: () => mockChannels }));

  it('testing get all messages', async () => {
    expect(await getAllChannels()).toBe(mockChannels);
  });
});
