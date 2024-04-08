let apiName = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let qrImage = document.querySelector("#qrImage");

btn.addEventListener("click" , function(){
    let val = inp.value;
    if(val === ""){
        alert("Please Enter Some text");
    }
    else{
        qrImage.src = apiName + val;
    }
})