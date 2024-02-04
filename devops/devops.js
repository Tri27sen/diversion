const questions = [
    {
        question: "What is the purpose of 'Docker' in DevOps?",
        answers: [
            {text: "To create virtual machines for testing applications", correct: false},
            {text: "To package and distribute applications with their dependencies in a standardized unit", correct: true},
            {text: "To manage database migrations in a DevOps pipeline", correct: false},
            {text: "To automate frontend testing in a continuous integration environment", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Continuous Integration' in DevOps.",
        answers: [
            {text: "Continuous Integration is the process of deploying code changes directly to production", correct: false},
            {text: "Continuous Integration is the practice of automatically integrating code changes from multiple contributors into a shared repository", correct: true},
            {text: "Continuous Integration is a tool for container orchestration in DevOps", correct: false},
            {text: "Continuous Integration is a strategy for optimizing database performance", correct: false},
        ]
    },
    {
        question: "What is 'Infrastructure as Code' (IaC) and how does it benefit DevOps practices?",
        answers: [
            {text: "IaC is a programming language for frontend development", correct: false},
            {text: "IaC is a method of managing and provisioning infrastructure through code, improving automation and consistency", correct: true},
            {text: "IaC is a framework for building responsive web pages", correct: false},
            {text: "IaC is a security protocol for DevOps environments", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Continuous Deployment' in DevOps.",
        answers: [
            {text: "Continuous Deployment is the practice of automatically deploying code changes to production without manual intervention", correct: true},
            {text: "Continuous Deployment is a tool for version control in DevOps", correct: false},
            {text: "Continuous Deployment is a technique for load balancing in a DevOps environment", correct: false},
            {text: "Continuous Deployment is a strategy for database replication", correct: false},
        ]
    },
    {
        question: "What is the role of 'Jenkins' in a DevOps pipeline?",
        answers: [
            {text: "Jenkins is a version control system for managing code changes", correct: false},
            {text: "Jenkins is a continuous integration and automation server that helps orchestrate the DevOps pipeline", correct: true},
            {text: "Jenkins is a containerization tool for packaging applications", correct: false},
            {text: "Jenkins is a database management system in a DevOps environment", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Microservices' in the context of DevOps architecture.",
        answers: [
            {text: "Microservices is a framework for building monolithic applications", correct: false},
            {text: "Microservices is an architectural approach where applications are composed of small, independent services that communicate through APIs", correct: true},
            {text: "Microservices is a version control strategy for DevOps teams", correct: false},
            {text: "Microservices is a tool for container orchestration", correct: false},
        ]
    },
    {
        question: "What is 'Kubernetes' and how does it facilitate container orchestration in DevOps?",
        answers: [
            {text: "Kubernetes is a version control system for managing code changes", correct: false},
            {text: "Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications", correct: true},
            {text: "Kubernetes is a continuous integration tool in DevOps", correct: false},
            {text: "Kubernetes is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'GitOps' in DevOps.",
        answers: [
            {text: "GitOps is a version control strategy for managing infrastructure code", correct: true},
            {text: "GitOps is a testing framework for DevOps applications", correct: false},
            {text: "GitOps is a framework for building responsive web pages", correct: false},
            {text: "GitOps is a database management technique for DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'AWS CloudFormation' and how does it contribute to infrastructure management in DevOps?",
        answers: [
            {text: "AWS CloudFormation is a version control system for managing code changes", correct: false},
            {text: "AWS CloudFormation is an infrastructure as code (IaC) service that allows users to define and provision AWS infrastructure using templates", correct: true},
            {text: "AWS CloudFormation is a containerization tool for packaging applications", correct: false},
            {text: "AWS CloudFormation is a continuous integration tool in DevOps", correct: false},
        ]
    },
    {
        question: "Explain the role of 'Ansible' in configuration management and automation in DevOps.",
        answers: [
            {text: "Ansible is a version control system for managing code changes", correct: false},
            {text: "Ansible is an open-source automation tool that helps with configuration management, application deployment, and task automation in DevOps", correct: true},
            {text: "Ansible is a containerization tool for packaging applications", correct: false},
            {text: "Ansible is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'Prometheus' and how does it contribute to monitoring and alerting in a DevOps environment?",
        answers: [
            {text: "Prometheus is a version control system for managing code changes", correct: false},
            {text: "Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability in DevOps environments", correct: true},
            {text: "Prometheus is a continuous integration tool in DevOps", correct: false},
            {text: "Prometheus is a database management system in a DevOps environment", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Blue-Green Deployment' in DevOps.",
        answers: [
            {text: "Blue-Green Deployment is a version control strategy for managing code changes", correct: false},
            {text: "Blue-Green Deployment is a deployment approach where two identical environments, 'Blue' and 'Green', are maintained to enable seamless updates with minimal downtime", correct: true},
            {text: "Blue-Green Deployment is a framework for building responsive web pages", correct: false},
            {text: "Blue-Green Deployment is a database replication technique in DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'Terraform' and how does it contribute to infrastructure provisioning in DevOps?",
        answers: [
            {text: "Terraform is a version control system for managing code changes", correct: false},
            {text: "Terraform is an open-source infrastructure as code (IaC) tool that allows users to define and provision infrastructure using a declarative configuration language", correct: true},
            {text: "Terraform is a containerization tool for packaging applications", correct: false},
            {text: "Terraform is a continuous integration tool in DevOps", correct: false},
        ]
    },
    {
        question: "Explain the role of 'Nagios' in monitoring and alerting in a DevOps environment.",
        answers: [
            {text: "Nagios is a version control system for managing code changes", correct: false},
            {text: "Nagios is an open-source monitoring system that provides alerting and reporting for servers, switches, applications, and services in DevOps environments", correct: true},
            {text: "Nagios is a continuous integration tool in DevOps", correct: false},
            {text: "Nagios is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'Splunk' and how does it contribute to log management and analysis in DevOps?",
        answers: [
            {text: "Splunk is a version control system for managing code changes", correct: false},
            {text: "Splunk is a platform for searching, monitoring, and analyzing machine-generated data, including logs, in a DevOps environment", correct: true},
            {text: "Splunk is a continuous integration tool in DevOps", correct: false},
            {text: "Splunk is a database management system in a DevOps environment", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Failover' in DevOps and its importance in ensuring system reliability.",
        answers: [
            {text: "Failover is a version control strategy for managing code changes", correct: false},
            {text: "Failover is a process of automatically switching to a backup system in case the primary system fails, ensuring continuous operation and reliability in DevOps environments", correct: true},
            {text: "Failover is a framework for building responsive web pages", correct: false},
            {text: "Failover is a database replication technique in DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'ELK Stack' and how does it contribute to log analysis and visualization in DevOps?",
        answers: [
            {text: "ELK Stack is a version control system for managing code changes", correct: false},
            {text: "ELK Stack (Elasticsearch, Logstash, Kibana) is a set of tools for log management, analysis, and visualization in DevOps environments", correct: true},
            {text: "ELK Stack is a continuous integration tool in DevOps", correct: false},
            {text: "ELK Stack is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Chaos Engineering' in DevOps and its role in improving system resilience.",
        answers: [
            {text: "Chaos Engineering is a version control strategy for managing code changes", correct: false},
            {text: "Chaos Engineering is a discipline that experiments on a system to build confidence in the system's capability to withstand turbulent conditions in production", correct: true},
            {text: "Chaos Engineering is a framework for building responsive web pages", correct: false},
            {text: "Chaos Engineering is a database replication technique in DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'GitLab CI/CD' and how does it facilitate continuous integration and delivery in DevOps?",
        answers: [
            {text: "GitLab CI/CD is a version control system for managing code changes", correct: false},
            {text: "GitLab CI/CD is an integrated continuous integration and continuous delivery platform that automates the software delivery process in DevOps", correct: true},
            {text: "GitLab CI/CD is a containerization tool for packaging applications", correct: false},
            {text: "GitLab CI/CD is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "Explain the role of 'Puppet' in configuration management and automation in a DevOps environment.",
        answers: [
            {text: "Puppet is a version control system for managing code changes", correct: false},
            {text: "Puppet is an open-source configuration management tool that automates the provisioning and management of infrastructure in DevOps", correct: true},
            {text: "Puppet is a containerization tool for packaging applications", correct: false},
            {text: "Puppet is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "What is 'Jira' and how does it contribute to project management in a DevOps environment?",
        answers: [
            {text: "Jira is a version control system for managing code changes", correct: false},
            {text: "Jira is a popular project management and issue tracking tool that helps teams plan, track, and manage work in a DevOps environment", correct: true},
            {text: "Jira is a containerization tool for packaging applications", correct: false},
            {text: "Jira is a database replication tool for DevOps environments", correct: false},
        ]
    },
    {
        question: "Explain the concept of 'Immutable Infrastructure' in DevOps and its benefits.",
        answers: [
            {text: "Immutable Infrastructure is a version control strategy for managing code changes", correct: false},
            {text: "Immutable Infrastructure is an approach where infrastructure is considered immutable and changes result in the creation of a new, replaceable instance", correct: true},
            {text: "Immutable Infrastructure is a framework for building responsive web pages", correct: false},
            {text: "Immutable Infrastructure is a database replication technique in DevOps environments", correct: false},
        ]
    },
];

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
