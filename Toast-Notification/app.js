let success = document.querySelector("#success");
let error = document.querySelector("#error");
let invalid = document.querySelector("#invalid");

let toastBox = document.querySelector("#toast-box");

function showToast(ele){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = `<span>${ele.innerHTML}</span>`;
    toastBox.appendChild(toast);

    if(ele.innerText === 'Success'){
        toast.style.background = "green"
    }
    else if(ele.innerText === 'Error'){
        toast.style.background = 'red';
    }
    else{
        toast.style.background = 'yellow';
    }

    setTimeout(()=>{
        toast.remove();
    } , 5000);
}

success.addEventListener('click' , function(){
    showToast(success);
});

error.addEventListener('click' , function(){
    showToast(error);
});


invalid.addEventListener('click' , function(){
    showToast(invalid);
});