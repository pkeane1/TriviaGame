var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");  // $("#c")
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("scoreContainer");
var playAgain = document.getElementById("playAgain")

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
        choiceA : "Bran the Builder",
        choiceB : "Bran the Broken",
        choiceC : "Jamie Lanaster",
        correct : "B"
    },{
        question : "What is Jon Snow Swords Name?",
        imgSrc : "img/css.png",
        choiceA : "Light Bringer",
        choiceB : "jon snow sword",
        choiceC : "Jamie Lanaster",
        correct : "B"
    },{
        question : "What is Jon Snows dog name?",
        imgSrc : "img/css.png",
        choiceA : "Prince",
        choiceB : "Ghoast",
        choiceC : "Henrick",
        correct : "B"
    },{
        question : "Who is the wildling with the red beard?",
        imgSrc : "img/css.png",
        choiceA : "Dylan Osho",
        choiceB : "Rob Stark",
        choiceC : "Tormund Giantsbane",
        correct : "C"
    }];

    // creating variables
    var lastQuestion = questions.length - 1;
    // Arrays start at zero so I minus 1
    var runningQuestion = 0;
    var count = 0;
    var questionTime = 10; // 10s
    var gaugeWidth = 615; // 150px
    var gaugeUnit = gaugeWidth / questionTime;
    var TIMER;
    var score = 0;

    function renderQuestion(){
        var q = questions[runningQuestion];
        
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
           
           
        }else{
           
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
        var scorePerCent = Math.round(100 * score/questions.length);
        scoreDiv.innerHTML += ("<p>You Scored a : " + scorePerCent +"%</p>")
        if(scorePerCent <= 100) {
            return quiz.style.display ="none";
            
        };
        if(quiz.style.display ="none") {
         
          return scoreDiv.style.display = "block";
                    
        }
        if(scoreDiv.style.display = "block") {
         return playAgain.style.display = "block";
    
    }
}
    
    
    
    
    
    
    
    
    
    