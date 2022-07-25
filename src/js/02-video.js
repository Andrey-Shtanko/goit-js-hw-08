import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);


const time = function (currentTime) {
    let savedTime = 0;
    let { seconds } = currentTime
     savedTime =  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
        
};

player.on('timeupdate', time);

const savedCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))

player.setCurrentTime(JSON.parse(savedCurrentTime));