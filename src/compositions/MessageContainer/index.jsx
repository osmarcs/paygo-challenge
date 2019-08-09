import React from 'react';
import styles from './MessageContainer.module.css';
import Message from '../../components/Message';


export default function MessageContainer({
  messages,
  channelTitle,
}) {
  return (
    <main className={styles.main}>
      <h1 className={styles.channel_header}>{`# ${channelTitle}`}</h1>
      <div className={styles.messages}>
        <div>
          {messages.map(message => (
            <Message {...message} key={message.id} />
          ))}
        </div>
      </div>
      <footer className={styles.footer} />
    </main>
  );
}
