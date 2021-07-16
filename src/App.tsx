import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

import { AppHeader, BitmovinPlayer, LogsTable } from './components';
import { initPlayer } from './utils/initPlayer';
import { source } from './constants';

function App() {
  const [player, setPlayer] = useState<any>();
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    (window as any).bitmovin && setPlayer(initPlayer((window as any).bitmovin, setLogs));
  }, []);

  useEffect(() => {
    if (player) {
      player.load(source).then(function () {
        console.log('Successfully loaded source');
      }, function () {
        console.log('Error while loading source');
      });

      player.on('play', function () {
        console.log('Logging - PLAYING');
      });
    }
  }, [player]);

  return (
    <div className="App">
      <AppHeader />
      <Grid container>
        <Grid item xs={6}>
          <BitmovinPlayer />
        </Grid>
        <Grid item xs={6}>
          <Box p={2} height={700}>
            <LogsTable items={logs}/>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
