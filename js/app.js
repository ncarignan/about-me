'use strict';

var yesNoArray = [
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
  ],
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

function yesNoQuestion(){
  for(var j = 0; j < 5; j++){
    var answerRaw = prompt(yesNoArray[j][0]);
    var answer = answerRaw.toLowerCase();
    console.log(yesNoArray[j][1] + ' ' + answer);
    if(answer === yesNoArray[j][2] || answer === yesNoArray[j][3]) {
      alert(yesNoArray[j][4]);
    } else{
      alert(yesNoArray[j][5]);
    }
  }
}
yesNoQuestion();


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
