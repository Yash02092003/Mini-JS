let t = document.querySelector("h1");
let timer = null;

let [seconds , minutes , hours] = [0 , 0 , 0];

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    t.innerHTML = h + ":" + m + ":" + s;
}
function watchStart(){
    if(timer){
        clearInterval(timer);
    }

    timer =  setInterval(stopwatch , 1000);
}

function watchStop(){
    if(timer){
        clearInterval(timer);
    }
}

function watchReset(){
    if(timer){
        clearInterval(timer);
    }

    [seconds , minutes , hours] = [0 , 0 , 0];

    t.innerHTML = "00 : 00 : 00";
}