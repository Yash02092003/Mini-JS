let nameError = document.querySelector('#name-error');
let phoneError = document.querySelector('#phone-error');
let emailError = document.querySelector('#email-error');
let msgError = document.querySelector('#msg-error');
let submit = document.querySelector('#submit-error');

document.querySelector('#contact-name').addEventListener('keyup' , (e)=>{
    let val = e.target.value;
    if(val.length === 0){
        nameError.innerHTML = 'Name is required';
    }
    // else if(!val.includes(' ')){
    //     nameError.innerHTML = 'Please Enter Full Name';
    // }
    else if (!val.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Please Enter Full Name'
    }
    else{
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    }   
})

document.querySelector("#phone").addEventListener('keyup' , (e) => {
    let val = e.target.value;
    if(val.length === 0){
        phoneError.innerHTML = 'Phone no is required'
    }
    else if(val.length !== 10){
        phoneError.innerHTML = 'Phone No. should be of 10 digits'
    }
    else if(!val.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only Digits Are allowed'
    }
    else {
        phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
})

document.querySelector("#email").addEventListener('keyup' , (e) => {
    let val = e.target.value;
    if(val.length === 0){
        emailError.innerHTML = 'Email is required'
    }
    else if(!val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Please enter a valid address';
    }
    else{
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
})

document.querySelector("#msg").addEventListener('keyup' , (e) => {
    let val = e.target.value;
    if(val.length < 30){
        msgError.innerHTML = `${30 - val.length} more words are required`;
    }
    else{
        msgError.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
})

document.querySelector('button').addEventListener('click', (e) => {
    if (!emailError.innerHTML.includes('<i class="fa-solid fa-check"></i>') ||
        !nameError.innerHTML.includes('<i class="fa-solid fa-check"></i>') ||
        !phoneError.innerHTML.includes('<i class="fa-solid fa-check"></i>') ||
        !msgError.innerHTML.includes('<i class="fa-solid fa-check"></i>')) {
        submit.innerHTML = 'Please Fill out all the fields';
        e.preventDefault()
    } 
    else {
        submit.innerHTML = '';
        console.log('hihihihi')
    }
});
