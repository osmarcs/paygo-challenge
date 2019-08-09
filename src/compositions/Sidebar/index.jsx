import React from 'react';
import styles from './Sidebar.module.css';

import ChannelList from '../../components/Channel/ChannelList';

export default function Sidebar({
  channels,
  handleSelectChannel,
}) {
  return (
    <aside className={styles.sidebar}>
      <h1>XYZ Company</h1>
      <ChannelList channels={channels} handleSelectChannel={handleSelectChannel} />
    </aside>
  );
}
