import React from 'react';
import { mount } from 'enzyme';
import Message from './index';

describe('Testing Message component', () => {
  const message = {
    content: 'Nullam sollicitudin consectetur neque eu mattis',
    user: {
      username: 'User01',
    },
    timestamp: '12:01 PM',
  };
  const getMounted = (props) => {
    const defaultProps = {
      ...message,
      ...props,
    };
    return (
      mount(<Message {...defaultProps} />)
    );
  };

  it('Should mounted component', () => {
    const component = getMounted();
    expect(component.exists()).toBeTruthy();
  });

  it('Should be rendered message with message data', () => {
    const component = getMounted();
    expect(component.find('span').first().text()).toBe(message.user.username);
    expect(component.find('span').last().text()).toBe(message.timestamp);
    expect(component.find('p').text()).toBe(message.content);
  });
});
