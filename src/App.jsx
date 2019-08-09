import React, { Component } from 'react';
import Sidebar from './compositions/Sidebar';
import MessagesContainer from './compositions/MessageContainer';
import { getAllChannels } from './services/Channel';
import { getAllMessages } from './services/Messages';
import { populateChannelsWithTotalUnreadMessages } from './helpers/utils';
import Welcome from './components/Welcome';


class App extends Component {
  state = {
    channels: [],
    messages: [],
    activeChannel: undefined,
  }

  async componentDidMount() {
    const channelsList = await getAllChannels();
    const messages = await getAllMessages();
    const channels = populateChannelsWithTotalUnreadMessages(channelsList, messages);
    this.setState({ channels, messages });
  }

  getMessagesByActiveChannel() {
    const {
      activeChannel = {},
      messages,
    } = this.state;
    return messages.filter(message => message.channel_id === activeChannel.id);
  }

  handleSelectChannel = (channelId) => {
    const { channels } = this.state;
    const channelFound = channels.find(channel => channel.id === channelId);
    if (!channelFound) {
      return;
    }
    const newChannesList = channels.map(channel => ({
      ...channel,
      unreadTotal: channelId === channel.id ? 0 : channel.unreadTotal,
    }));
    this.setState({ channels: newChannesList, activeChannel: channelFound });
  }

  render() {
    const {
      channels,
      activeChannel,
    } = this.state;
    const messages = this.getMessagesByActiveChannel();
    return (
      <>
        <Sidebar channels={channels} handleSelectChannel={this.handleSelectChannel} />
        {
          activeChannel
            ? (
              <MessagesContainer channelTitle={activeChannel.name} messages={messages} />
            )
            : (
              <Welcome />
            )
        }
      </>
    );
  }
}

export default App;
