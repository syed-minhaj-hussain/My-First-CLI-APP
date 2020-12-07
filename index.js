// club everything to make the game
// use question list
// and function to put together a quiz

var readLineSync = require("readline-sync");
var chalk = require("chalk");

// Define "score" (globally)
var score = 0;

// store highscores
var highScores = [
  {name : "Minhaj", score : 3},
  {name : "Ficticious", score : 2}
];

// Take UserName As Input & Greet
var userName = readLineSync.question(`May I Know Your Name? `).toString().toUpperCase();
console.log(`${chalk.bgRed.bold(`Welcome`)} `,userName);

function play(question, answer) {
//  Input
 var userAnswer = readLineSync.question(question).toUpperCase(); 

//  Processing, Branching
  if (userAnswer === answer) {
    // output
    console.log(`${chalk.bgGreen.bold.black(`You Are Right!`)}`);
    score++;
  } else {
    // output
    console.log(`${chalk.bgYellow.bold.black(`You Are Wrong!`)}`);
  }
  // output the score:
  console.log(`Your Score Is: `,score);
  console.log("---------")
}


// Take Questions & Answers As Array-of-objects
let qna = [
  {question : `${chalk.cyanBright(`Whta's My Age?`)} `, answer : "21"},
  {question : `${chalk.cyanBright(`Do I Like Sweets?`)} `, answer : "YES"},
  {question : `${chalk.cyanBright(`Where Do I Live?`)} `, answer : "KARIMNAGAR"}
]

// Iterate the above array using for-loop and call the play()
for (let i = 0; i < qna.length; i++) {
  play(qna[i].question, qna[i].answer);
}

// Simply print highscore as a heading
  console.log(`${chalk.redBright(`High Scores`)}`);
  console.log("------------");

// iterate highscores
for (let i = 0; i < highScores.length; i++) {

  console.log(highScores[i].name, ":", highScores[i].score);
}

  console.log("------------");
// Disclaimer If User Scores A High Score
if(score >= highScores[1].score){
  console.log(`${chalk.cyanBright.bold(`YAY! You Just Hit HighScore. Take A ScreenShot & Notify Me For Update!`)}`);
}

