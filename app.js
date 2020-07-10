var min=0;
var sec=0;
var milisec=0;

var minHeading=document.getElementById("minutes");
var secHeading=document.getElementById("seconds");
var milisecHeading=document.getElementById("milisec");

var interval;
function timer(){
    milisec++;
    milisecHeading.innerHTML=milisec;
    if (milisec>=100){
        sec++;
        secHeading.innerHTML=sec;
        milisec=0;
    }else if(sec>=60){
        min++;
        minHeading.innerHTML=min;
        sec=0
    }
}

function start(){
    interval=setInterval(timer,10);
    document.getElementById("start").disabled=true;
}
function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled=false;
}
function reset(){
    min="00";
    sec="00";
    milisec="00";
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    milisecHeading.innerHTML=milisec;
    stop();
    document.getElementById("start").disabled=false;
}
