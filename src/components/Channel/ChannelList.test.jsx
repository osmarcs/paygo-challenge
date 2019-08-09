import React from 'react';
import { mount } from 'enzyme';
import ChannelList from './ChannelList';

describe('Testing ChannelList component', () => {
  const channels = [
    {
      id: 1,
      channel: 'channel01',
      unreadTotal: 0,
    },
    {
      id: 2,
      channel: 'channel02',
      unreadTotal: 4,
    },
  ];
  const handleSelectChannel = jest.fn(x => x);
  const getMounted = (props) => {
    const defaultProps = {
      handleSelectChannel,
      channels,
      ...props,
    };
    return (
      mount(<ChannelList {...defaultProps} />)
    );
  };

  afterEach(() => {
    handleSelectChannel.mockClear();
  });

  it('Should be mounted component', () => {
    const component = getMounted();
    expect(component.exists()).toBeTruthy();
  });

  it('Should be rendered title Channels', () => {
    const component = getMounted();
    expect(component.find('h3').text()).toBe('Channels');
  });

  it(`Should be rendered list with ${channels.length} items`, () => {
    const component = getMounted();
    expect(component.find('li').length).toBe(channels.length);
  });

  it('Should handleSelectChannel called', () => {
    const component = getMounted();
    const firstLi = component.find('li').at(1);
    firstLi.find('a').simulate('click');
    expect(handleSelectChannel).toHaveBeenCalled();
  });
});
