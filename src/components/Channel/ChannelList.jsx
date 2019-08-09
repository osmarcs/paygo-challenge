import React from 'react';
import ChannelItem from './ChannelItem';
import styles from './Channel.module.css';

export default function ChannelList({
  channels,
  handleSelectChannel,
}) {
  return (
    <nav>
      <h3>Channels</h3>
      <ul className={styles.list}>
        {
          channels.map(channel => (
            <li key={channel.id}>
              <ChannelItem onClick={() => handleSelectChannel(channel.id)} {...channel} />
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
