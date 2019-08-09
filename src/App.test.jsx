import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import * as ServiceChannel from './services/Channel';
import * as ServiceMessage from './services/Messages';
import mockChannels from './api/data/channels.json';
import mockMessages from './api/data/messages.json';

describe('Testing App', () => {
  ServiceChannel.getAllChannels = jest.fn(() => Promise.resolve(mockChannels));
  ServiceMessage.getAllMessages = jest.fn(() => Promise.resolve(mockMessages));

  const getMounted = async (props) => {
    const component = mount(<App {...props} />);
    await ServiceChannel.getAllChannels();
    await ServiceMessage.getAllMessages();
    return component;
  };
  it('renders without crashing', async () => {
    const component = await getMounted();
    expect(component.exists()).toBeTruthy();
  });

  it('should select a valid channel', async () => {
    const component = await getMounted();
    component.instance().handleSelectChannel(mockChannels[0].id);
    const { activeChannel } = component.state();
    expect(mockChannels[0].id).toBe(activeChannel.id);
    expect(mockChannels[0].name).toBe(activeChannel.name);
  });

  it('should select a invalid channel', async () => {
    const component = await getMounted();
    component.instance().handleSelectChannel(99999);
    const { activeChannel } = component.state();
    expect(activeChannel).toBeFalsy();
  });
});
