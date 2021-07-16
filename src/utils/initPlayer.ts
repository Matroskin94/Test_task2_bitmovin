import { playlist } from "../constants";

export const initPlayer = (bitmovin: any, setLogs: any) => {
  var i = 0;
  var conf = {
    key: "YOUR-KEY-HERE",
    events: {
      playbackfinished: function () {
        if (i < playlist.length) {
          player.load({ dash: playlist[i].dash, hls: playlist[i].hls });
          console.log('now playing ' + playlist[i].name);
          i++;
        }
      },
      ready: function () {
        if (i > 0) {
          player.play();
        }
      }
    },
    logs: {
      onLog: function (type: string, text: string, additionalData?: any) {
        const logObject = {
          type,
          text
        }

        setLogs((prevLogs: any) => [logObject, ...prevLogs]);
      },
      level: bitmovin.player.LogLevel.OFF
    }
  };

  var player = new bitmovin.player.Player(document.getElementById("player"), conf);

  return player;
}