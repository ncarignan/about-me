'use strict';

var yesNoQuestions = [
  ['Does Nicholas have a dog',
    'answer 1 is',
    'y',
    'yes',
    'Correct, he actually has two dogs: a black lab and a german shepherd',
    'Nice try, he actually has two dogs: a black lab and a german shepherd'
  ],
  [
    'Did Nicholas come from Washington?',
    'answer 2 is',
    'y',
    'yes',
    'Nope, better luck next time. Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.',
    'Well done, Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.'
  ],
  [
    'Did Nicholas come from law enforcement',
    'answer 3 is',
    'y',
    'yes',
    'Nice job, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.',
    'Incorrect, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.'
  ],
  [
    'Does Nicholas speak French?',
    'answer 4 is',
    'n',
    'no',
    'No way, Nicholas can read and write a little Mandarin but does not know any French.',
    'That\'s right, Nicholas does not know any French, but can read and write a little Mandarin'
  ]
    [
      'Did Nicholas climb K2?',
      'answer 5 is',
      'y',
      'yes',
      'I wish! However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.',
      'Unfortunately, you are right. However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.'
    ]
];
var userName = prompt('I\'m Nicholas, what is your name?');
alert('Hi ' + userName + ', nice to meet you');
console.log ('userName is ' + userName);

function dogQuestion() {
  var question1 = yesNoQuestions[0][0];
  var hasDogRaw = prompt(question1);
  var hasDog = hasDogRaw.toLowerCase();
  console.log(question1);
  console.log(yesNoQuestions[0][1] + hasDog);
  if(hasDog === yesNoQuestions[0][2] || hasDog === yesNoQuestions[0][3]) {
    alert(yesNoQuestions[0][4]);
  } else{
    alert(yesNoQuestions[0][5]);
  }
}
dogQuestion();

function stateQuestion(){
  var question2 = yesNoQuestions[1][0];
  var fromWashingtonRaw = prompt(question2);
  var fromWashington = fromWashingtonRaw.toLowerCase();
  console.log(question2);
  console.log(yesNoQuestions[1][1], fromWashington);
  if(fromWashington === yesNoQuestions[1][2] || fromWashington === yesNoQuestions[1][3]) {
    alert(yesNoQuestions[1][4]);
  } else{
    alert(yesNoQuestions[1][5]);
  }
}
stateQuestion();
function jobQuestion(){
  var question3 = yesNoQuestions[2][0];
  var lawEnforecementRaw = prompt(question3);
  var lawEnforecement = lawEnforecementRaw.toLowerCase();
  console.log(question3);
  console.log(yesNoQuestions[2][1], lawEnforecement);
  if(lawEnforecement === yesNoQuestions[2][2] || lawEnforecement === yesNoQuestions[2][3]) {
    alert(yesNoQuestions[2][4]);
  } else{
    alert(yesNoQuestions[2][5]);
  }
}
jobQuestion();
function frenchQuestion(){
  var question4 = yesNoQuestions[3][0];
  var speaksFrenchRaw = prompt(question4);
  var speaksFrench = speaksFrenchRaw.toLowerCase();
  console.log(question4);
  console.log(yesNoQuestions[3][1], speaksFrench);
  if(speaksFrench === yesNoQuestions[3][2] || speaksFrench === yesNoQuestions[3][3]) {
    alert(yesNoQuestions[3][4]);
  } else{
    alert(yesNoQuestions[3][5]);
  }
}
frenchQuestion();
function k2Question(){
  var question5 = yesNoQuestions[4][0];
  var climbedK2Raw = prompt(question5);
  var climbedK2 = climbedK2Raw.toLowerCase();
  console.log(question5);
  console.log(yesNoQuestions[4][1], climbedK2);
  if(climbedK2 === yesNoQuestions[4][2] || climbedK2 === yesNoQuestions[4][3]) {
    alert(yesNoQuestions[4][4]);
  } else{
    alert(yesNoQuestions[4][5]);
  }
}
k2Question();
function randQuestion(){
  var i = 2; //setup for while loops
  var favorite1 = Math.floor((Math.random() * 666) + 1);
  console.log(favorite1);

  while(i >= 0){
    var question6 = 'guess my favorite integer between 1 and 666. You have ';
    var guessedNumber = parseInt(prompt(question6 + i + ' tries left'));
    console.log('guessed number is ' + guessedNumber);
    console.log('tries left ' + (i - 1));
    i--;
    if(guessedNumber === NaN) {
      alert('Try guessing an integer between 1 and 666');
      i++;
    }else if(guessedNumber === favorite1){
      alert('great job, you are such a good guesser!!! ' + favorite1 + ' was my favorite number!');
      break;
    } else if(i === 0){
      break;
    }else if(guessedNumber > favorite1){
      alert('too high, guess again.');
    }else if(guessedNumber < favorite1){
      alert('too low, guess again.');
    }
  }

  if(i === 0){
    alert('you failed, but that is ok. We are going to try again; I will make it easier with 3 guesses. However, I have changed my mind about my favorite integer');
    var favorite2 = Math.floor((Math.random() * 666) + 1);
    console.log(favorite2);
    i = 3;
    while(i >= 0){
      var question7 = 'You are still guessing my favorite integer between 1 and 666. You have ';
      guessedNumber = parseInt(prompt(question7 + i + ' tries left'));
      console.log('guessed number is ' + guessedNumber);
      console.log('tries left ' + (i - 1));
      i--;
      if(guessedNumber === NaN) {
        alert('Try guessing an integer between 1 and 666');
        i++;
      }else if(guessedNumber === favorite2){
        alert('great job, you turned out to be a decent guesser after all!! ' + favorite2 + ' was my favorite number!');
        break;
      }else if(i === 0){
        break;
      }else if(guessedNumber > favorite2){
        alert('too high, guess again.');
      }else if(guessedNumber < favorite2){
        alert('too low, guess again.');
      }
    }
  }

  if(i === 0){
    alert('you failed again? Maybe you are not as awesome as they say. I will give you one more chance to redeem yourself. This time I am really handicapping you. You get 666 guesses and I have a new favorite number.');
    var favorite3 = Math.floor((Math.random() * 666) + 1);
    console.log(favorite3);
    i = 3;
    while(i >= 0){
      var question8 = 'Lets do this, show me your skills and guess. You have ';
      guessedNumber = parseInt(prompt(question8 + (i + 663) + ' tries left'));
      console.log('guessed number is ' + guessedNumber);
      console.log('tries left ' + (i + 663 - 1));
      i--;
      if(guessedNumber === NaN) {
        alert('Try guessing an integer between 1 and 666');
        i++;
      }else if(guessedNumber === favorite3){
        alert('great job, you turned out to be a decent guesser after all!! ' + favorite2 + ' was my favorite number!');
        break;
      }else if(i === 0){
        alert('this is no fun anymore, maybe you should just look at the rest of my webpage');
        break;
      }else if(guessedNumber > favorite1){
        alert('too high, guess again.');
      }else if(guessedNumber < favorite1){
        alert('too low, guess again.');
      }
    }
  }
}
randQuestion();
function foodQuestion(){
  var i = 5;
  while(i >= 0){
    var fA = ['pizza', 'peach cobbler', 'shepherd\'s pie', 'ice cream', 'milk shake', 'caterpillar roll', 'sushi', 'salmon', 'chinese food', 'chow mein'];
    var foodQuestion = 'I have a few favorite foods. What do you think one of them is? you have ';
    var foodGuessRaw = prompt(foodQuestion + i + ' guesses left');
    var foodGuess = foodGuessRaw.toLowerCase();
    i--;
    if(fA.indexOf(foodGuess, 0) >= 0){
    //if(fA.includes(foodGuess)){ //also same
      alert('congrats, you guessed right. Specifically, my favorites are ' + fA.join(', ') + '.');
      break;
    }else if(i == 0){
      alert('I like some of those, but I really love ' + fA.join(', ') + ' a lot more');
      break;
    }
  }
}
foodQuestion();
