const startButton = document.getElementById("startbtn");

const stopButton = document.getElementById("stopbtn");

const resetButton = document.getElementById("resetbtn");

const clock = document.getElementById("clock");

const mainPage = document.getElementById("mainpage");

const timer = document.getElementsByClassName("timer");

let timerStatus = false;

var id;

let increament = function(){
    let initial = timer.length - 1;
    let counter = parseInt(timer[initial].innerHTML);
    let lastTime;
    if(initial % 2 == 0){
        lastTime = 5
    }else{
        lastTime = 9;
    }
    while(counter == lastTime){
        counter = 0;
        timer[initial].innerHTML = counter;
        initial--;
        counter = parseInt(timer[initial].innerHTML);
        lastTime = (initial % 2 == 0)?5:9;
        if(initial < 0) break;
    }
    if(initial >= 0){
        counter++;
        timer[initial].innerHTML = counter;
    }
};



let startTimer = function(){
    if(!timerStatus){
        id = setInterval(increament,1000);
        timerStatus = true;
    }
}

let stopTimer = function(){
    clearInterval(id);
    timerStatus = false;
}

let resetTimer = function(){
    for(let i of timer){
        i.innerHTML = 0;
        clearInterval(id);
        timerStatus=false;
    }
}

startButton.addEventListener("click", startTimer)

stopButton.addEventListener("click", stopTimer);

resetButton.addEventListener("click", resetTimer);