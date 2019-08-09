import React from 'react';
import styles from './Message.module.css';

export default function Message({ content, user, timestamp }) {
  return (
    <div>
      <div className="message-info">
        <span className={styles.person}>{ user.username }</span>
        <span className={styles.time}>{ timestamp }</span>
      </div>
      <p>{ content }</p>
    </div>
  );
}
