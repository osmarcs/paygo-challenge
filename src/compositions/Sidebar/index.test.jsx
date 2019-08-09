import React from 'react';
import { mount } from 'enzyme';
import Sidebar from './index';

describe('Testing Message component', () => {
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
      channels,
      handleSelectChannel,
      ...props,
    };
    return (
      mount(<Sidebar {...defaultProps} />)
    );
  };

  it('Should mounted component', () => {
    const component = getMounted();
    expect(component.exists()).toBeTruthy();
  });

  it('Should be rendered sidebar with channels data', () => {
    const component = getMounted();
    expect(component.find('h1').text()).toBe('XYZ Company');
    expect(component.find('ChannelList').exists()).toBeTruthy();
  });
});
