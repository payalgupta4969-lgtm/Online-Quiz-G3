const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None"],
        answer: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which is used for logic?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    },
    {
        question: "Which tag is used for JS?",
        options: ["<script>", "<js>", "<style>", "<code>"],
        answer: 0
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreEl = document.getElementById("score");

startBtn.onclick = () => {
    startScreen.classList.add("hide");
    quizScreen.classList.remove("hide");
    loadQuestion();
};

function loadQuestion() {
    selectedOption = null;
    questionEl.innerText = questions[currentQuestion].question;
    optionsEl.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => selectOption(li, index);
        optionsEl.appendChild(li);
    });
}

function selectOption(element, index) {
    const options = document.querySelectorAll("li");
    options.forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");
    selectedOption = index;
}

nextBtn.onclick = () => {
    if (selectedOption === null) return alert("Select an option!");

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        quizScreen.classList.add("hide");
        resultScreen.classList.remove("hide");
        scoreEl.innerText = `${score} / ${questions.length}`;
    }
};