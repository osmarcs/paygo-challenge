import React from 'react';
import styles from './Channel.module.css';

export default function ChannelItem({
  name,
  unreadTotal,
  ...props
}) {
  return (
    <a {...props}>
      <span className={unreadTotal ? styles.unread : ''}>
        {`# ${name}`}
      </span>
      {!!unreadTotal && <span className={styles.bagde_unread}>{unreadTotal}</span>}
    </a>
  );
}
