import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const iframe1 = document.querySelector('iframe');
console.log(iframe1);

const play = new Player(iframe);
play.on('timeupdate', throttle(fnTime, 1000));

function fnTime(data) {
  let time = data.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}
const saveTime = localStorage.getItem('videoplayer-current-time');
if (saveTime) {
  play.setCurrentTime(saveTime);
}
