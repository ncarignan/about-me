'use strict';

var userName = prompt('I\'m Nicholas, what is your name?');
alert('Hi, ' + userName + ', nice to meet you');
console.log ('userName is ' + userName);

var answer1 = prompt('Does Nicholas Have a dog').toLowerCase();
console.log('answer 1 is', answer1);
if(answer1 === 'y' || answer1 === 'yes') {
  alert('Correct, he actually has two dogs: a black lab and a german shepherd');
} else{
  alert('Incorrect, he actually has two dogs: a black lab and a german shepherd');
}

var answer2 = prompt('Is Nicholas from Washington?').toLowerCase();
console.log('answer 2 is', answer2);
if(answer2 === 'y' || answer2 === 'yes') {
  alert('Incorrect, Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
} else{
  alert('Correct, Nicholas grew up in California and moved to the mountains of Idaho, he only just moved to Seattle.');
}

var answer3 = prompt('Did Nicholas come from law enforcement?').toLowerCase();
console.log('answer 3 is', answer3);
if(answer3 === 'y' || answer3 === 'yes') {
  alert('correct, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
} else{
  alert('Incorrect, Nicholas was a 911 disparcher for almost 3 years, he propably has some interesting stories.');
}

var answer4 = prompt('Does Nicholas speak French?').toLowerCase();
console.log('answer 4 is', answer4);
if(answer4 === 'y' || answer4 === 'yes') {
  alert('Incorrect, Nicholas can read and write a little Mandarin but does not know any French.');
} else{
  alert('Correct, Nicholas can read and write a little Mandarin but does not know any French.');
}

var answer5 = prompt('Did Nicholas Climb K2?').toLowerCase();
console.log('answer 5 is', answer5);
if(answer5 === 'y' || answer5 === 'yes') {
  alert('Incorrect, however, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
} else{
  alert('Correct, however, Nicholas has climbed almost two dozen notable mountains in the United States. Both with the Boy Scouts and his family, Nicholas loves to conquer peaks.');
}
