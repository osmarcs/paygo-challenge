export function getUnreadMessagesByChannel(messages) {
  return messages
    .filter(message => message.is_unread)
    .reduce((unreadChannels, message) => {
      const totalUnreadChannel = unreadChannels[message.channel_id] || 0;
      return {
        ...unreadChannels,
        [message.channel_id]: totalUnreadChannel + 1,
      };
    }, {});
}

export function populateChannelsWithTotalUnreadMessages(channels, messages) {
  const unreadMessagesByChannel = getUnreadMessagesByChannel(messages);
  return channels.map(channel => ({
    ...channel,
    unreadTotal: unreadMessagesByChannel[channel.id] || 0,
  }));
}
