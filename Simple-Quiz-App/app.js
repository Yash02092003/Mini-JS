const questions = [
    {
        question : "Which is largest animal in the world?",
        answers : [
            {text: "Shark" , correct : false} ,
            {text: "Blue Whale" , correct : true} ,
            {text: "Elephant" , correct : false} ,
            {text: "Giraffe" , correct : false}
        ]
    },
    {
        question : "which is the smallest country in the world?",
        answers : [
            {text: "Vatican City" , correct : true} ,
            {text: "Bhutan" , correct : false} ,
            {text: "Nepal" , correct : false} ,
            {text: "Sri Lanka" , correct : false}
        ]
    },
    {
        question : "Which is the largest desert in the world?",
        answers : [
            {text: "Kalahari" , correct : false} ,
            {text: "Gobi" , correct : false} ,
            {text: "Sahara" , correct : false} ,
            {text: "Antartica" , correct : true}
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answers : [
            {text: "Asia" , correct : false} ,
            {text: "Australia" , correct : true} ,
            {text: "Arctic" , correct : false} ,
            {text: "Africa" , correct : false}
        ]
    }
]

const questionElement = document.querySelector("#question");
const answerBtn = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQues = 0;
let score = 0;

function startQuiz(){
    currentQues = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let current = questions[currentQues];
    let questionNo = currentQues + 1;
    questionElement.innerHTML = questionNo + ". " + current.question;
    // Adding Answer Buttons
    current.answers.forEach((answer) => {
        const btn = document.createElement("button");
        btn.innerHTML = answer.text;
        btn.classList.add("btn");
        answerBtn.appendChild(btn);
        if(answer.correct){
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener("click" , function(e){
            const selectedBtn = e.target
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
                score++;
            }
            else{
                selectedBtn.classList.add("incorrect")
            }

            Array.from(answerBtn.children).forEach(Btn =>{
                if(Btn.dataset.correct === "true"){
                    Btn.classList.add("correct");
                }

                Btn.disabled = true;
            });

            nextBtn.style.display = "block";
        })
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}


function handleNextButton(){
    currentQues++;
    if(currentQues < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click" , function(){
    if(currentQues < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();