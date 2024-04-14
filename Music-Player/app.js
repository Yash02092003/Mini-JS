let progress = document.querySelector("#progress");
let song = document.querySelector("audio");
let ctrlIcon = document.querySelector("#play");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

ctrlIcon.addEventListener("click" , function(){
    if(ctrlIcon.classList.contains("ri-play-line")){
        song.play();
        ctrlIcon.classList.remove("ri-play-line");
        ctrlIcon.classList.add("ri-pause-line")
    }
    else{
        song.pause();
        ctrlIcon.classList.add("ri-play-line");
        ctrlIcon.classList.remove("ri-pause-line")
    }
})

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    } , 500);
}

progress.addEventListener("change" , function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("ri-play-line");
    ctrlIcon.classList.add("ri-pause-line")
   
})