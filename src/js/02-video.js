// імпортую додані бібліотеки через npm:  Vimeo плеєр та lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// ініціалізую плеєр
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// використовую метод on() і  відстежую подію timeupdate - оновлення часу відтворення
const onPlay = function (event) {
  const seconds = event.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  //   console.log(localStorage);
};
player.on('timeupdate', throttle(onPlay, 1000));

// застосовую метод setCurrentTime() з метою відновлення відтворення зі збереженої позиції
const currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
