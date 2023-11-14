let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {
                text: "<scripting>",
                correct: false
            },
            {
                text: "<script>",
                correct: true
            },
            {
                text: "<js>",
                correct: false
            },
            {
                text: "<javascript>",
                correct: false
            },
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box',

        answers: [
            {
                text: "alert('Hello World')",
                correct: true
            },
            {
                text: "alertBox('Hello World');  ",
                correct: false
            },
            {
                text: "msg('Hello World');",
                correct: false
            },
            {
                text: "msgBox('Hello World');",
                correct: false
            },
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            {
                text: "var colors = (1:'red', 2:'green', 3:'blue')",
                correct: false
            },
            {
                text: "var colors = 'red', 'green', 'blue'",
                correct: false
            },
            {
                text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
                correct: false
            },
            {
                text: "var colors = ['red', 'green', 'blue']",
                correct: true
            },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {
                text: "onmouseclick",
                correct: false
            },
            {
                text: "onchange",
                correct: false
            },
            {
                text: "onclick",
                correct: true
            },
            {
                text: "onmouseover",
                correct: false
            },
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            {
                text: "Math.round(7.25)",
                correct: true
            },
            {
                text: "Math.rnd(7.25)",
                correct: false
            },
            {
                text: "round(7.25)",
                correct: false
            },
            {
                text: "rnd(7.25)",
                correct: false
            },
        ]
    }
];
let timeLeft = 60;
let questionIndex = 0;

let start = document.getElementById("start");
let questionEl = document.getElementById("question");
let answers = document.getElementById("answers");
let nextButton = document.getElementById("next");
let timerEl = document.getElementById("timer");
let quiz = document.getElementById("quiz-app");
let end = document.getElementById("end-screen");

quiz.style.display = "none";
end.style.display = "none";

function startQuiz() {
    // console.log("clicked");
    quiz.style.display = "block";
    start.style.display = "none";
    generateQuestions();
}

function generateQuestions() {
    answers.innerHTML = ""
    questionEl.textContent = questions[questionIndex].question;
    questions[questionIndex].answers.forEach(function (choice) {
        // choice.
        // randomize true false
        let tempButton = document.createElement("button");
        tempButton.setAttribute("class", "btn");
        tempButton.textContent = choice.text;
        tempButton.onclick = checkAnswer;
        tempButton.setAttribute("value", choice.correct);
        answers.appendChild(tempButton);
    })
}

function checkAnswer(e) {
    // console.log(this.value);
    // if answers is correct show next question
    // if answers is incorrect sub number of sec from time left
    // console.log(e.target.value);
    if (e.target.value == "false") {
        timeLeft -= 10; 

    }
    // timeLeft -= 10;
    questions[questionIndex++];
    console.log(timeLeft);
    generateQuestions();
    // increment index +1 run generate questions
}

function countdown() {
    

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
        }
    }, 1000);
}

countdown();

function endQuiz() {
    quiz.style.display = "none";
    end.style.display = "block";
}



start.addEventListener("click", startQuiz);