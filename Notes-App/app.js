let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click" , function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable" , true);
    img.setAttribute("src" , "./images/delete.png");
    notesContainer.appendChild(inputBox).appendChild(img);
    img.addEventListener("click" , function(){
        img.parentElement.remove();
        updateStorage();
    })
    updateStorage();
})


function updateStorage(){
    localStorage.setItem("notes" , notesContainer.innerHTML);
}

function showStorage(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showStorage();

document.addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})