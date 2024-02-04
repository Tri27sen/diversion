const questions = [
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        answers: [
            {text: "To enable modern JavaScript features", correct: false},
            {text: "To indicate that the code should be executed in strict mode", correct: true},
            {text: "To import external libraries", correct: false},
            {text: "To define a variable with strict scope", correct: false},
        ]
    },
    {
        question: "What is the Virtual DOM, and how does it improve performance in React?",
        answers: [
            {text: "A representation of the actual DOM used for server-side rendering", correct: false},
            {text: "A lightweight copy of the actual DOM maintained by React for efficient updates", correct: true},
            {text: "A JavaScript library for manipulating the DOM directly", correct: false},
            {text: "A tool for debugging React applications", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        answers: [
            {text: "To declare a function as asynchronous", correct: true},
            {text: "To handle errors in asynchronous code", correct: false},
            {text: "To execute code synchronously", correct: false},
            {text: "To create an asynchronous event listener", correct: false},
        ]
    },
    {
        question: "What is the difference between 'let', 'const', and 'var' in JavaScript?",
        answers: [
            {text: "'let' and 'const' have block-level scope, while 'var' has function-level scope", correct: true},
            {text: "'var' is used for constant values, while 'let' and 'const' are for variables", correct: false},
            {text: "'let' is used for global variables, while 'const' is for constants", correct: false},
            {text: "'const' is used for variables that can be reassigned, while 'let' is for constants", correct: false},
        ]
    },
    {
        question: "What is a closure in JavaScript, and how is it used?",
        answers: [
            {text: "A closure is a data type in JavaScript used for storing multiple values", correct: false},
            {text: "A closure is a combination of a function and the lexical environment within which that function was declared", correct: true},
            {text: "A closure is a way to declare private variables in JavaScript", correct: false},
            {text: "A closure is a JavaScript library for asynchronous programming", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'event delegation' in JavaScript.",
        answers: [
            {text: "Event delegation is a method for handling events only in the capturing phase", correct: false},
            {text: "Event delegation is a way of managing events by handling them at a higher level in the DOM hierarchy", correct: true},
            {text: "Event delegation is a technique for preventing event propagation", correct: false},
            {text: "Event delegation is a way of assigning events to specific elements using their IDs", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            {text: "To reference the current function", correct: false},
            {text: "To reference the object on which a method was called", correct: true},
            {text: "To declare a new variable in the current scope", correct: false},
            {text: "To create a new instance of an object", correct: false},
        ]
    },
    {
        question: "Explain the difference between 'localStorage' and 'sessionStorage' in HTML5.",
        answers: [
            {text: "'localStorage' and 'sessionStorage' are two terms for the same feature", correct: false},
            {text: "'localStorage' stores data with no expiration time, while 'sessionStorage' stores data for the duration of the page session", correct: true},
            {text: "'localStorage' is more secure than 'sessionStorage'", correct: false},
            {text: "'sessionStorage' can store larger amounts of data than 'localStorage'", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'defer' attribute in a script tag?",
        answers: [
            {text: "To delay the execution of a script until the page has finished parsing", correct: true},
            {text: "To execute the script asynchronously", correct: false},
            {text: "To specify that the script should be executed in the background", correct: false},
            {text: "To defer the loading of the script until it is explicitly requested by the user", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'hoisting' in JavaScript.",
        answers: [
            {text: "Hoisting is a mechanism that allows variables to be used before they are declared", correct: true},
            {text: "Hoisting is a way of organizing code using 'hoist' statements", correct: false},
            {text: "Hoisting is a feature in JavaScript that prevents variables from being redeclared", correct: false},
            {text: "Hoisting is a technique for optimizing code execution", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'fetch' API in JavaScript?",
        answers: [
            {text: "To fetch data from a local storage", correct: false},
            {text: "To fetch data from an external server using HTTP requests", correct: true},
            {text: "To fetch images and other media files", correct: false},
            {text: "To fetch data from a remote database", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'promise' in JavaScript and how it is used.",
        answers: [
            {text: "A promise is a guarantee that a specific event will happen in the future", correct: false},
            {text: "A promise is an object representing the eventual completion or failure of an asynchronous operation", correct: true},
            {text: "A promise is a JavaScript library for handling animations", correct: false},
            {text: "A promise is a way of handling errors in JavaScript", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'useEffect' hook in React?",
        answers: [
            {text: "To handle user input in React components", correct: false},
            {text: "To perform side effects in functional React components", correct: true},
            {text: "To create reusable components in React", correct: false},
            {text: "To manage state in class-based React components", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'BEM' in the context of CSS.",
        answers: [
            {text: "'BEM' stands for 'Browser Extension Model' and is used for extending browser functionality", correct: false},
            {text: "'BEM' stands for 'Block Element Modifier' and is a methodology for naming and organizing CSS classes", correct: true},
            {text: "'BEM' is a preprocessor language for CSS", correct: false},
            {text: "'BEM' is a JavaScript library for manipulating the DOM", correct: false},
        ]
    },
    {
        question: "What is 'Redux' and how does it work in a React application?",
        answers: [
            {text: "'Redux' is a styling library for React components", correct: false},
            {text: "'Redux' is a state management library for JavaScript applications", correct: true},
            {text: "'Redux' is a testing framework for React applications", correct: false},
            {text: "'Redux' is a build tool for bundling JavaScript files", correct: false},
        ]
    },
    {
        question: "What is 'WebAssembly' and how does it differ from JavaScript?",
        answers: [
            {text: "'WebAssembly' is a scripting language used for client-side web development", correct: false},
            {text: "'WebAssembly' is a binary instruction format for a stack-based virtual machine", correct: true},
            {text: "'WebAssembly' is a JavaScript framework for building web applications", correct: false},
            {text: "'WebAssembly' is an HTML5 feature for creating responsive web pages", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'responsive design' in web development.",
        answers: [
            {text: "Responsive design is a design approach that focuses on aesthetics and visual appeal", correct: false},
            {text: "Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes", correct: true},
            {text: "Responsive design is a programming paradigm for developing web applications", correct: false},
            {text: "Responsive design is a database management technique for web applications", correct: false},
        ]
    },
    {
        question: "What is 'GraphQL' and how does it differ from traditional REST APIs?",
        answers: [
            {text: "'GraphQL' is a programming language for querying databases", correct: false},
            {text: "'GraphQL' is a query language for APIs and a runtime for executing those queries with existing data", correct: true},
            {text: "'GraphQL' is a JavaScript library for building user interfaces", correct: false},
            {text: "'GraphQL' is a framework for developing serverless applications", correct: false},
        ]
    },
    {
        question: "Explain the purpose of the 'box-sizing' CSS property.",
        answers: [
            {text: "The 'box-sizing' property is used to set the size of an HTML element", correct: false},
            {text: "The 'box-sizing' property is used to control the layout model of an element", correct: false},
            {text: "The 'box-sizing' property is used to set whether the padding and border of an element should be included in the total width and height", correct: true},
            {text: "The 'box-sizing' property is used to create responsive designs in CSS", correct: false},
        ]
    },
    {
        question: "What is 'Webpack' and how does it contribute to modern web development?",
        answers: [
            {text: "'Webpack' is a JavaScript framework for building web applications", correct: false},
            {text: "'Webpack' is a build tool that bundles JavaScript files and other assets for web development", correct: true},
            {text: "'Webpack' is a styling library for React components", correct: false},
            {text: "'Webpack' is a state management library for JavaScript applications", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'SEO' (Search Engine Optimization) in the context of web development.",
        answers: [
            {text: "'SEO' is a programming language used for creating dynamic web pages", correct: false},
            {text: "'SEO' is a framework for building serverless applications", correct: false},
            {text: "'SEO' is a technique for improving the visibility of a website on search engines", correct: true},
            {text: "'SEO' is a JavaScript library for creating animations", correct: false},
        ]
    },
    {
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        answers: [
            {text: "To store session-specific data that is automatically cleared when the browser is closed", correct: false},
            {text: "To store data with no expiration time and persists even when the browser is closed and reopened", correct: true},
            {text: "To store data that is shared between different browser tabs", correct: false},
            {text: "To store data that is encrypted and secure", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'JWT' (JSON Web Token) in web development.",
        answers: [
            {text: "'JWT' is a JavaScript library for working with JSON data", correct: false},
            {text: "'JWT' is a mechanism for securely transmitting information between parties as a JSON object", correct: true},
            {text: "'JWT' is a testing framework for web applications", correct: false},
            {text: "'JWT' is a build tool for bundling JavaScript files", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score  = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
   if(currentQuestionIndex < questions.length){
        handleNextButton();
   } else {
    startQuiz();
   }
});

startQuiz();
