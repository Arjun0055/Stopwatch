let seconds = 0o0;
let micro_seconds = 0o0;
let minutes = 0o0;
let hours = 0o0;

function playMusic() {

    let audio = new Audio("space-alarm.mp3");
    audio.play()
}


let getSeconds = document.querySelector('.seconds');
let getmicro_seconds = document.querySelector('.micro_seconds');
let getMinutes = document.querySelector('.minutes');
let getHours = document.querySelector('.hours');

let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;
let n=9;

btnStart.addEventListener('click', ()=>{
    
   interval = setInterval(startTimer, 10);
})

btnStop.addEventListener('click', ()=>{

    clearInterval(interval);
})

btnReset.addEventListener('click', ()=>{

    clearInterval(interval);
    micro_seconds = '00';
    seconds = '00';
    minutes = '00';
    hours = '00';
    getHours.innerHTML = hours;
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getmicro_seconds.innerHTML = micro_seconds;
})

function startTimer(){

    micro_seconds++;

    if(micro_seconds <=9){
        getmicro_seconds.innerHTML = '0' + micro_seconds;
    }
    if(micro_seconds > 9){
        getmicro_seconds.innerHTML = micro_seconds;
    }
    if(micro_seconds > 99){
        seconds++;
        getSeconds.innerHTML = '0'+ seconds;
        micro_seconds = 0;
        getmicro_seconds.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(minutes > 9){
        getMinutes.innerHTML = minutes;
        
    }
    if(minutes > 59){

        hours++;
        playMusic();
        getHours.innerHTML = '0' + hours;
        minutes = 0;
        getMinutes.innerHTML = '0' + 0;
    }
    if(hours >=99){
        clearInterval;
    }
}
