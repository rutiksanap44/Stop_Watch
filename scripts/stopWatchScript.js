// getting the Start Button
const startButton = document.getElementById("startbtn");

// getting the StopButton
const stopButton = document.getElementById("stopbtn");

// getting the Reset Button
const resetButton = document.getElementById("resetbtn");

// getting the timer section
const clock = document.getElementById("clock");

// getting the main div
const mainPage = document.getElementById("mainpage");

// getting every timer like second, minute and hour
const timer = document.getElementsByClassName("timer");

// assigning the initial value of timer status as false
// false = timer is not running
// true = timer is not running
let timerStatus = false;

// initialzing id to use as a value with setInterval for further usage
var id;

// this function will be called when start button will get pressed
let increament = function(){
    // initial is for the index of the timer
    // initial = 4 , 5 for second
    // initital = 2 , 3 for minute
    // initial = 0 , 1 for second
    let initial = timer.length - 1;

    // to get the value of current index present in timer 
    let counter = parseInt(timer[initial].innerHTML);

    // last time is to the assign the number either 5 or 9
    // 5 for even and 9 for odd respectively
    let lastTime;
    if(initial % 2 == 0){
        lastTime = 5
    }else{
        lastTime = 9;
    }
    // till the last time == counter 
    // counter will increase from 0 to 9 and 0 to 5 respective to the last time
    while(counter == lastTime){
        counter = 0;
        timer[initial].innerHTML = counter;
        initial--;
        counter = parseInt(timer[initial].innerHTML);
        lastTime = (initial % 2 == 0)?5:9;
        if(initial < 0) break;
    }

    // counter will only increase when initial is greater than zero means till 99 hours only
    if(initial >= 0){
        counter++;
        timer[initial].innerHTML = counter;
    }
};


// this will get called when Start Button will get placed
let startTimer = function(){
    if(!timerStatus){
        id = setInterval(increament,1000);
        timerStatus = true;
    }
}

// this will get called when Stop Button will get placed
let stopTimer = function(){
    clearInterval(id);
    timerStatus = false;
}

// this will get called when Reset Button will get placed
let resetTimer = function(){
    for(let i of timer){
        i.innerHTML = 0;
        clearInterval(id);
        timerStatus=false;
    }
}

// clicking Start Button
startButton.addEventListener("click", startTimer)

// clicking Stop Button
stopButton.addEventListener("click", stopTimer);

// clicking Reset Button
resetButton.addEventListener("click", resetTimer);