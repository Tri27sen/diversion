const questions = [
    {
        question: "Explain the concept of 'Microservices' in the context of backend architecture.",
        answers: [
            {text: "Microservices is a monolithic architecture approach where all components are tightly coupled", correct: false},
            {text: "Microservices is an architectural style where applications are composed of small, independent services that communicate through APIs", correct: true},
            {text: "Microservices is a database management technique for backend systems", correct: false},
            {text: "Microservices is a version control strategy for backend development", correct: false},
        ]
    },
    {
        question: "What is the role of a 'Reverse Proxy' in backend infrastructure?",
        answers: [
            {text: "A Reverse Proxy is used for caching frontend assets to improve performance", correct: false},
            {text: "A Reverse Proxy is a server that sits between client devices and a web server, forwarding client requests to the server and returning the server's responses to clients", correct: true},
            {text: "A Reverse Proxy is responsible for handling backend business logic in a distributed system", correct: false},
            {text: "A Reverse Proxy is a security mechanism for preventing unauthorized access to backend servers", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Load Balancing' and its importance in backend systems.",
        answers: [
            {text: "Load Balancing is a database replication technique for improving data redundancy", correct: false},
            {text: "Load Balancing is the distribution of incoming network traffic across multiple servers to ensure no single server is overwhelmed, improving scalability and reliability", correct: true},
            {text: "Load Balancing is a version control strategy for backend development", correct: false},
            {text: "Load Balancing is a security mechanism for preventing DDoS attacks on backend servers", correct: false},
        ]
    },
    {
        question: "What is 'JWT' (JSON Web Token) and how is it commonly used in backend authentication?",
        answers: [
            {text: "JWT is a version control system for managing code changes", correct: false},
            {text: "JWT is a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication in backend systems", correct: true},
            {text: "JWT is a database management technique for backend systems", correct: false},
            {text: "JWT is a frontend framework for building responsive web pages", correct: false},
        ]
    },
    {
        question: "Explain the role of a 'Message Queue' in backend architecture.",
        answers: [
            {text: "A Message Queue is used for storing and managing frontend assets", correct: false},
            {text: "A Message Queue is a communication mechanism that allows different parts of a distributed system to communicate asynchronously by sending and receiving messages", correct: true},
            {text: "A Message Queue is a version control system for backend development", correct: false},
            {text: "A Message Queue is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is the purpose of 'Connection Pooling' in backend database management?",
        answers: [
            {text: "Connection Pooling is a version control strategy for managing code changes", correct: false},
            {text: "Connection Pooling is a technique used to reduce the overhead of opening and closing database connections by reusing existing connections", correct: true},
            {text: "Connection Pooling is a frontend framework for building responsive web pages", correct: false},
            {text: "Connection Pooling is a security mechanism for preventing unauthorized access to backend databases", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Caching' in backend systems and its benefits.",
        answers: [
            {text: "Caching is a frontend optimization technique for reducing the size of images", correct: false},
            {text: "Caching is the process of storing copies of files or data in a location closer to the user, reducing latency and improving performance in backend systems", correct: true},
            {text: "Caching is a version control system for backend development", correct: false},
            {text: "Caching is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "What is 'GraphQL' and how does it differ from traditional REST APIs in backend development?",
        answers: [
            {text: "GraphQL is a version control system for managing code changes", correct: false},
            {text: "GraphQL is a query language and runtime for APIs that enables clients to request only the data they need, avoiding over-fetching and under-fetching of data", correct: true},
            {text: "GraphQL is a database management technique for backend systems", correct: false},
            {text: "GraphQL is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "Explain the role of 'ORM' (Object-Relational Mapping) in backend database interaction.",
        answers: [
            {text: "ORM is a version control strategy for managing code changes", correct: false},
            {text: "ORM is a programming technique that converts data between incompatible type systems in object-oriented programming languages", correct: false},
            {text: "ORM is a middleware that allows developers to interact with databases using an object-oriented paradigm, abstracting away the need to write SQL queries directly", correct: true},
            {text: "ORM is a security mechanism for preventing unauthorized access to backend databases", correct: false},
        ]
    },
    {
        question: "What is 'Serverless Computing' and how does it impact backend architecture?",
        answers: [
            {text: "Serverless Computing is a version control system for managing code changes", correct: false},
            {text: "Serverless Computing is a cloud computing model where cloud providers automatically manage the infrastructure, allowing developers to focus solely on writing code without dealing with server management", correct: true},
            {text: "Serverless Computing is a frontend framework for building responsive web pages", correct: false},
            {text: "Serverless Computing is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Database Sharding' and its relevance in backend scalability.",
        answers: [
            {text: "Database Sharding is a version control strategy for managing code changes", correct: false},
            {text: "Database Sharding is a technique where large databases are partitioned into smaller, more manageable parts (shards) to distribute the load and improve scalability", correct: true},
            {text: "Database Sharding is a frontend optimization technique for reducing the size of images", correct: false},
            {text: "Database Sharding is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is 'Docker' and how does it contribute to containerization in backend development?",
        answers: [
            {text: "Docker is a version control system for managing code changes", correct: false},
            {text: "Docker is an open-source platform that enables developers to automate the deployment of applications inside lightweight, portable containers", correct: true},
            {text: "Docker is a database management technique for backend systems", correct: false},
            {text: "Docker is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "Explain the role of 'WebSockets' in real-time communication in backend systems.",
        answers: [
            {text: "WebSockets is a version control strategy for managing code changes", correct: false},
            {text: "WebSockets is a communication protocol that provides full-duplex communication channels over a single, long-lived connection, enabling real-time data exchange in backend systems", correct: true},
            {text: "WebSockets is a frontend framework for building responsive web pages", correct: false},
            {text: "WebSockets is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "What is the purpose of 'Rate Limiting' in backend APIs and how does it enhance security?",
        answers: [
            {text: "Rate Limiting is a version control system for managing code changes", correct: false},
            {text: "Rate Limiting is a mechanism that restricts the number of requests a client can make to a backend API within a specified time frame, preventing abuse and enhancing security", correct: true},
            {text: "Rate Limiting is a frontend optimization technique for reducing the size of images", correct: false},
            {text: "Rate Limiting is a database replication technique for backend systems", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'JWT Authentication' and its implementation in backend systems.",
        answers: [
            {text: "JWT Authentication is a version control strategy for managing code changes", correct: false},
            {text: "JWT Authentication is a method of verifying the identity of users by using JSON Web Tokens, which are securely transmitted between the client and the server", correct: true},
            {text: "JWT Authentication is a frontend framework for building responsive web pages", correct: false},
            {text: "JWT Authentication is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is 'OAuth' and how is it commonly used for authentication in backend systems?",
        answers: [
            {text: "OAuth is a version control system for managing code changes", correct: false},
            {text: "OAuth is an open standard for access delegation commonly used for authentication and authorization in backend systems, allowing secure third-party access to resources", correct: true},
            {text: "OAuth is a database management technique for backend systems", correct: false},
            {text: "OAuth is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "Explain the role of 'NGINX' in backend server configurations and load balancing.",
        answers: [
            {text: "NGINX is a version control strategy for managing code changes", correct: false},
            {text: "NGINX is a popular web server and reverse proxy server that is widely used for handling tasks such as load balancing, reverse proxying, and serving static content in backend systems", correct: true},
            {text: "NGINX is a frontend optimization technique for reducing the size of images", correct: false},
            {text: "NGINX is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is 'Kubernetes' and how does it contribute to container orchestration in backend development?",
        answers: [
            {text: "Kubernetes is a version control system for managing code changes", correct: false},
            {text: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications in backend systems", correct: true},
            {text: "Kubernetes is a database management technique for backend systems", correct: false},
            {text: "Kubernetes is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Server-Sent Events' (SSE) and its role in real-time communication in backend systems.",
        answers: [
            {text: "Server-Sent Events is a version control strategy for managing code changes", correct: false},
            {text: "Server-Sent Events is a web technology that allows servers to push real-time updates to clients over a single HTTP connection, facilitating real-time communication in backend systems", correct: true},
            {text: "Server-Sent Events is a frontend framework for building responsive web pages", correct: false},
            {text: "Server-Sent Events is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is 'WebHooks' and how are they used in backend systems for event-driven architecture?",
        answers: [
            {text: "WebHooks is a version control system for managing code changes", correct: false},
            {text: "WebHooks are HTTP callbacks that allow external services to be notified when certain events occur, enabling event-driven architecture in backend systems", correct: true},
            {text: "WebHooks is a database management technique for backend systems", correct: false},
            {text: "WebHooks is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
    {
        question: "Explain the role of 'Elasticsearch' in backend systems and its contributions to search and analytics.",
        answers: [
            {text: "Elasticsearch is a version control strategy for managing code changes", correct: false},
            {text: "Elasticsearch is a distributed, open-source search and analytics engine used for full-text search, log monitoring, and data visualization in backend systems", correct: true},
            {text: "Elasticsearch is a frontend optimization technique for reducing the size of images", correct: false},
            {text: "Elasticsearch is a security mechanism for preventing SQL injection attacks", correct: false},
        ]
    },
    {
        question: "What is 'WebAssembly' and how does it impact backend development?",
        answers: [
            {text: "WebAssembly is a version control system for managing code changes", correct: false},
            {text: "WebAssembly is a binary instruction format for a stack-based virtual machine that enables high-performance execution of code in backend systems", correct: true},
            {text: "WebAssembly is a database management technique for backend systems", correct: false},
            {text: "WebAssembly is a security mechanism for preventing unauthorized access to backend APIs", correct: false},
        ]
    },
];

// Rest of the code remains unchanged.


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
    } else {
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
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
