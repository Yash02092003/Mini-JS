let submit = document.querySelector("button[type=submit]");
let popup = document.querySelector(".pop");
let popBtn = document.querySelector(".pop button");
submit.addEventListener("click" , function(){
    // popup.style.display = "flex";
    // popup.style.height = "200px";
    popup.style.transform = "scale(1)"
    popup.style.bottom = "40%";
})

popBtn.addEventListener("click" , function(){
    // popup.style.display = "none";
    // popup.style.height = "0";
    popup.style.transform = "scale(0)"
    popup.style.bottom = "0%";
})