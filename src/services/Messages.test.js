import * as Api from './api';
import { getAllMessages } from './Messages';
import mockMessages from '../api/data/channels.json';

describe('Testing Message Service', () => {
  Api.http = jest.fn(() => Promise.resolve({ json: () => mockMessages }));

  it('testing get all messages', async () => {
    expect(await getAllMessages()).toBe(mockMessages);
  });
});
