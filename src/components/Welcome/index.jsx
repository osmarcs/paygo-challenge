import React from 'react';
import styles from './Welcome.module.css';

export default function Welcome() {
  return (
    <article className={styles.PlaceholderMessage}>
      <h1>Welcome :)</h1>
      <p>Please select some channel, to view messages</p>
    </article>
  );
}
