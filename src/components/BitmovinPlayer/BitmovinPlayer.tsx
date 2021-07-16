import React, { FC, memo } from 'react';
import styles from './BitmovinPlayer.module.css';

export const BitmovinPlayer: FC = memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>HTML5 Adaptive Streaming Player for MPEG-DASH & HLS</h1>
        <h2>Your videos play everywhere with low startup delay, no buffering and in highest quality.</h2>
        <div className={styles.content}>
          <div className="player-wrapper">
            <div id="player" className={styles.playerWrapper}></div>
          </div>
          <div className={styles.description}>
            <p>For more information about the bitmovin player, please have a look at our online <a
              href="//bitmovin.com/support">Developer Section</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
});