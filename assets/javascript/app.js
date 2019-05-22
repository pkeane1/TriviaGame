var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

var questions = [
    {
        question :"Who is the tall blonde women?",
        imgSrc : "img/html.png",
        choiceA : "Brianne of Tarth",
        choiceB : "James Regan",
        choiceC : "Michael Jackson",
        correct : "A"
    },{
        question : "Who is crippled in the first season?",
        imgSrc : "img/css.png",
        choiceA : "Stevie Wonder",
        choiceB : "Bran the Broken",
        choiceC : "Jamie Lanaster",
        correct : "B"
    },{
        question : "What is Jon Snow swords Name?",
        imgSrc : "img/css.png",
        choiceA : "Light Bringer",
        choiceB : "jon snow sword",
        choiceC : "Jamie Lanaster",
        correct : "B"
    },{
        question : "Who is crippled in the first season?",
        imgSrc : "img/css.png",
        choiceA : "Stevie Wonder",
        choiceB : "Bran the Broken",
        choiceC : "Jamie Lanaster",
        correct : "B"
    },{
        question : "Who is crippled in the first season?",
        imgSrc : "img/css.png",
        choiceA : "Stevie Wonder",
        choiceB : "Bran the Broken",
        choiceC : "Jamie Lanaster",
        correct : "B"
    }];

    // creating variables
    var lastQuestion = questions.length - 1;
    // Arrays start at zero so I minus 1
    var runningQuestion = 0;
    var count = 0;
    var questionTime = 10; // 10s
    var gaugeWidth = 150; // 150px
    var gaugeUnit = gaugeWidth / questionTime;
    var TIMER;
    var score = 0;

    function renderQuestion(){
        let q = questions[runningQuestion];
        
        question.innerHTML = "<p>"+ q.question +"</p>";
        qImg.innerHTML = "<img src="+ q.imgSrc +">";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
    }
    
    start.addEventListener("click",startQuiz);
    
    // start quiz
    function startQuiz(){
        start.style.display = "none";
        renderQuestion();
        quiz.style.display = "block";
        renderCounter();
        TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
    }
    
    // render progress
    
    
    // counter render
    
    function renderCounter(){
        if(count <= questionTime){
            counter.innerHTML = count;
            timeGauge.style.width = count * gaugeUnit + "px";
            count++
        }else{
            count = 0;
            // change progress color to red
            
            if(runningQuestion < lastQuestion){
                runningQuestion++;
                renderQuestion();
            }else{
                // end the quiz and show the score
                clearInterval(TIMER);
                scoreRender();
            }
        }
    }
    
    // checkAnwer
    
    function checkAnswer(answer){
        if( answer == questions[runningQuestion].correct){
            // answer is correct
            score++;
            // change progress color to green
           
        }else{
            // answer is wrong
            // change progress color to red
           
        }
        count = 0;
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
    
    // answer is correct
    
    
    // score render
    function scoreRender(){
        scoreDiv.style.display = "block";
        
        // calculate the amount of question percent answered by the user
        const scorePerCent = Math.round(100 * score/questions.length);
        
    
        scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    }
    
    
    
    
    
    
    
    
    
    
    