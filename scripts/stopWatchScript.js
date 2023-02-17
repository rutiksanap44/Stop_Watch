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
    let count = parseInt(timer[initial].innerHTML);
    let finalTime = (initial % 2 == 0)?5:9;
    while(count == finalTime){
        count = 0;
        timer[initial].innerHTML = count;
        initial--;
        count = parseInt(timer[initial].innerHTML);
        finalTime = (initial % 2 == 0)?5:9;
        if(initial < 0) break;
    }
    if(initial >= 0){
        count++;
        timer[initial].innerHTML = count;
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