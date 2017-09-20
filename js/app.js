'use strict';

var userName = prompt('I\'m Nicholas, what is your name?');
alert('Hi ' + userName + ', nice to meet you');
console.log ('userName is ' + userName);

var question1= 'Does Nicholas have a dog';
var hasDogRaw = prompt(question1);
var hasDog = hasDogRaw.toLowerCase();
console.log(question1);
console.log('answer 1 is' + hasDog);
if(hasDog === 'y' || hasDog === 'yes') {
  alert('Correct, he actually has two dogs: a black lab and a german shepherd');
} else{
  alert('Nice try, he actually has two dogs: a black lab and a german shepherd');
}

var question2 = 'Did Nicholas come from Washington?'
var fromWashingtonRaw = prompt(question2);
var fromWashington = fromWashingtonRaw.toLowerCase();
console.log(question2);
console.log('answer 2 is', fromWashington);
if(fromWashington === 'y' || fromWashington === 'yes') {
  alert('Nope, better luck next time. Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
} else{
  alert('Well done, Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
}

var question3 = 'Did Nicholas come from law enforcement';
var lawEnforecementRaw = prompt(question3);
var lawEnforecement = lawEnforecementRaw.toLowerCase();
console.log(question3);
console.log('answer 3 is', lawEnforecement);
if(lawEnforecement === 'y' || lawEnforecement === 'yes') {
  alert('Nice job, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
} else{
  alert('Incorrect, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
}

var question4 = 'Does Nicholas speak French?';
var speaksFrenchRaw = prompt(question4);
var speaksFrench = speaksFrenchRaw.toLowerCase();
console.log(question4);
console.log('answer 4 is', speaksFrench);
if(speaksFrench === 'y' || speaksFrench === 'yes') {
  alert('No way, Nicholas can read and write a little Mandarin but does not know any French.');
} else{
  alert('That\'s right, Nicholas does not know any French, but can read and write a little Mandarin');
}

var question5 = 'Did Nicholas climb K2?'
var climbedK2Raw = prompt(question5);
var climbedK2 = climbedK2Raw.toLowerCase();
console.log(question5);
console.log('answer 5 is', climbedK2);
if(climbedK2 === 'y' || climbedK2 === 'yes') {
  alert('I wish! However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
} else{
  alert('Unfortunately, you are right. However, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
}



//guessing while they have tries remaining and while not given right answer-- if right tell them, add points- if wrong ask again/out of tries you lose
//first you have 5 tries, then 4, then 3 then 3 forever
//in for loops when they get it right use "break;"
//put in a guessing game- guess my number, three strikes- make it between 1 and 333. after three strikes it resets and you have to try again but with a new number each time 'i chose a new number, that one got old'
