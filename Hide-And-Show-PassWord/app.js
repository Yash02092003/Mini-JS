let password = document.querySelector("input");
let eye = document.querySelector("i");

eye.addEventListener("click" , function(){
    if(password.type == "password"){
        password.type = "text";
        eye.classList.remove("ri-eye-line");
        eye.classList.add("ri-eye-off-line");
    }
    else{
        password.type = "password";
        eye.classList.remove("ri-eye-off-line");
        eye.classList.add("ri-eye-line");
    }
})