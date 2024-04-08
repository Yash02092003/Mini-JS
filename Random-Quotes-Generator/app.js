let apiName = "https://api.quotable.io/random";
let twitter = document.querySelector("#twitter");
let newQ = document.querySelector("#NewQ");

newQ.addEventListener("click" , async function(){
    let res = await fetch(apiName);
    let data = await res.json();
    document.querySelector("blockquote").innerHTML = data.content;
    document.querySelector("span").innerHTML = data.author;
})

twitter.addEventListener("click" , function(){
    window.open("https://twitter.com/intent/tweet?text=" + document.querySelector("blockquote").innerText + " -----------by " + 
   document.querySelector("span").innerText , "Tweet Window" , "width = 600 , height = 700"
)
})

