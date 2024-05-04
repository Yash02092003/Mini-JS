var icon = document.querySelector("#icon");

icon.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "./assessts/sun.png";
    }
    else{
        icon.src = "./assessts/moon.png"
    }
})