let questions = [
    {
        question: "Sample question 1",
        answers: [
            {
                text: "1",
                correct: true
            },
            {
                text: "2",
                correct: false
            },
            {
                text: "3",
                correct: false
            },
            {
                text: "4",
                correct: false
            },
        ]
    },
    {
        question: "Sample question 2",
        answers: [
            {
                text: "sample 1",
                correct: true
            },
            {
                text: "sample 2",
                correct: false
            },
            {
                text: "sample 3",
                correct: false
            },
            {
                text: "sample 4",
                correct: false
            },
        ]
    },
    {
        question: "Sample question 3",
        answers: [
            {
                text: "sample 1",
                correct: true
            },
            {
                text: "sample 2",
                correct: false
            },
            {
                text: "sample 3",
                correct: false
            },
            {
                text: "sample 4",
                correct: false
            },
        ]
    },
    {
        question: "Sample question 4",
        answers: [
            {
                text: "sample 1",
                correct: true
            },
            {
                text: "sample 2",
                correct: false
            },
            {
                text: "sample 3",
                correct: false
            },
            {
                text: "sample 4",
                correct: false
            },
        ]
    },
    {
        question: "Sample question 5",
        answers: [
            {
                text: "sample 1",
                correct: true
            },
            {
                text: "sample 2",
                correct: false
            },
            {
                text: "sample 3",
                correct: false
            },
            {
                text: "sample 4",
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