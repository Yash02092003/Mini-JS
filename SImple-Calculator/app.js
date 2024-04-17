let btns = document.querySelectorAll("input[type = button]");
let display = document.querySelector("#dis");

for(let btn of btns){
    btn.addEventListener("click" , function(){
        if(btn.value == 'AC'){
            display.value = "";
        }
        else if(btn.value == 'DE'){
            display.value = display.value.toString().slice(0 , -1);
        }
        else if(btn.value == "="){
            display.value = eval(display.value);
        }
        else{
            display.value += btn.value;
        }
    })
}