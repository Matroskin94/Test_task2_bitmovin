import { memo } from 'react';
import styles from './Header.module.css';

export const AppHeader = memo(() => {
  return (
    <div id={styles.banner}>
      <div className={styles.title}><h1>Simple Playlist</h1></div>
    </div>
  );
});