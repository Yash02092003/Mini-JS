let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById('nextbtn');

scrollContainer.addEventListener("wheel" , (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener('click' , () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900
})

backBtn.addEventListener('click' , () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -=900;
})