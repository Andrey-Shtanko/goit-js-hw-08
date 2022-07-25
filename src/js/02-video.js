import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);


const time = function (currentTime) {
    let savedTime = 0;
    let { seconds } = currentTime
    savedTime = localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
    // console.log(seconds);
        
};

player.on('timeupdate', throttle(time, 1000));

const savedCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))

player.setCurrentTime(JSON.parse(savedCurrentTime));