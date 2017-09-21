'use strict';
//
// var userName = prompt('I\'m Nicholas, what is your name?');
// alert('Hi ' + userName + ', nice to meet you');
// console.log ('userName is ' + userName);
//
// var question1 = 'Does Nicholas have a dog';
// var hasDogRaw = prompt(question1);
// var hasDog = hasDogRaw.toLowerCase();
// console.log(question1);
// console.log('answer 1 is' + hasDog);
// if(hasDog === 'y' || hasDog === 'yes') {
//   alert('Correct, he actually has two dogs: a black lab and a german shepherd');
// } else{
//   alert('Nice try, he actually has two dogs: a black lab and a german shepherd');
// }
//
// var question2 = 'Did Nicholas come from Washington?';
// var fromWashingtonRaw = prompt(question2);
// var fromWashington = fromWashingtonRaw.toLowerCase();
// console.log(question2);
// console.log('answer 2 is', fromWashington);
// if(fromWashington === 'y' || fromWashington === 'yes') {
//   alert('Nope, better luck next time. Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
// } else{
//   alert('Well done, Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
// }
//
// var question3 = 'Did Nicholas come from law enforcement';
// var lawEnforecementRaw = prompt(question3);
// var lawEnforecement = lawEnforecementRaw.toLowerCase();
// console.log(question3);
// console.log('answer 3 is', lawEnforecement);
// if(lawEnforecement === 'y' || lawEnforecement === 'yes') {
//   alert('Nice job, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
// } else{
//   alert('Incorrect, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
// }
//
// var question4 = 'Does Nicholas speak French?';
// var speaksFrenchRaw = prompt(question4);
// var speaksFrench = speaksFrenchRaw.toLowerCase();
// console.log(question4);
// console.log('answer 4 is', speaksFrench);
// if(speaksFrench === 'y' || speaksFrench === 'yes') {
//   alert('No way, Nicholas can read and write a little Mandarin but does not know any French.');
// } else{
//   alert('That\'s right, Nicholas does not know any French, but can read and write a little Mandarin');
// }
//
// var question5 = 'Did Nicholas climb K2?';
// var climbedK2Raw = prompt(question5);
// var climbedK2 = climbedK2Raw.toLowerCase();
// console.log(question5);
// console.log('answer 5 is', climbedK2);
// if(climbedK2 === 'y' || climbedK2 === 'yes') {
//   alert('I wish! However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
// } else{
//   alert('Unfortunately, you are right. However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
// }


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

i = 5;
while(i >= 0){
  var fA = ['pizza', 'peach cobbler', 'shepherd\'s pie', 'ice cream', 'milk shake', 'caterpillar roll', 'sushi', 'salmon', 'chinese food', 'chow mein'];
  var foodQuestion = 'I have a few favorite foods. What do you think one of them is? you have ';
  var foodGuessRaw = prompt(foodQuestion + i + ' guesses left');
  var foodGuess = foodGuessRaw.toLowerCase();
  i--;
  if(fA.indexOf(foodGuess, 0) > 0){
    alert('congrats, you guessed right. Specifically, my favorites are ' + fA[0] + ', ' + fA[1] + ', ' + fA[2] + ', ' + fA[3] + ', ' + fA[4] + ', ' + fA[5] + ', ' + fA[6] + ', ' + fA[7] + ', and ' + fA[8] );
    break;
  }else if(i == 0){
    alert('I like some of those, but I really love ' + fA[0] + ', ' + fA[1] + ', ' + fA[2] + ', ' + fA[3] + ', ' + fA[4] + ', ' + fA[5] + ', ' + fA[6] + ', ' + fA[7] + ', and ' + fA[8] + ' a lot more');
    break;
  }
}
