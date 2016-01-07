var userName = prompt('Welcome to the guessing game.  What is your name?');
console.log('The user\'s name is ' + userName);

if (userName === '') {
  userName = 'Sloth Bearson';
}

var userNumCorrect = 0; //number of questions answered correctly
var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
function firstQuestion() {
var userAnswer1 = prompt('First question!  This is a yes/no question, ' + userName + ', so please answer with Y or N.  Was I born in Alaska?');
console.log('The user\'s first answer is ' + userAnswer1);

if (userAnswer1.toUpperCase() === 'Y' || userAnswer1.toUpperCase() === 'YES') {
  userNumCorrect++;
  //alert('Good job ' + userName + ', you are right!  I was born in Alaska.  The doctor had me fight a polar bear inside our igloo, as is tradition.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res1.textContent = 'Good job ' + userName + ', you are right!  I was born in Alaska.  The doctor had me fight a polar bear inside our igloo, as is tradition.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';

  console.log('User has ' + userNumCorrect + ' answers correct');
} else {
  //alert('Too bad ' + userName + ', you are wrong!  I was born in Alaska.  You better bone up on your trivia.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res1.textContent = 'Too bad ' + userName + ', you are wrong!  I was born in Alaska.  You better bone up on your trivia.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';
  console.log('User has ' + userNumCorrect + ' answers correct');
}
}
function secondQuestion() {
var userAnswer2 = prompt('Alright ' + userName + ', next question! This is a yes/no question, so please answer with Y or N.  Are my eyes blue?');
console.log('The user\'s second answer is ' + userAnswer2);

if (userAnswer2.toUpperCase() === 'Y' || userAnswer2.toUpperCase() === 'YES') {
  userNumCorrect++;
  //alert('Great choice ' + userName + '!  My eyes are blue and dark, like a stormy sea. You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res2.textContent = 'Great choice ' + userName + '!  My eyes are blue and dark, like a stormy sea. You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';
  console.log('User has ' + userNumCorrect + ' answers correct');
} else {
  //alert('Rough luck ' + userName +', you are wrong.  You should spend more time staring at my face.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res2.textContent = 'Rough luck ' + userName +', you are wrong.  You should spend more time staring at my face.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';
  console.log('User has ' + userNumCorrect + ' answers correct');
}
}

function thirdQuestion() {
var userAnswer3 = prompt('You are doing great ' + userName + ', lets keep moving!  This is another yes/no question, so please answer with Y or N.  Is my favorite animal the slothbear?');
console.log('The user\'s third answer is ' + userAnswer3);

if (userAnswer3.toUpperCase() === 'Y' || userAnswer3.toUpperCase() === 'YES') {
  userNumCorrect++;
  //alert('Right you are ' + userName + '!  My favorite animal is the slothbear.  Lets make some vacuum noises to celebrate!  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res3.textContent = 'Right you are ' + userName + '!  My favorite animal is the slothbear.  Lets make some vacuum noises to celebrate!  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';
  console.log('User has ' + userNumCorrect + ' answers correct');
} else {
  //alert(userName + ', you got this one wrong.  I was going to share my pile of ants with you, but now I am going to keep them all to myself.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.');
  res3.textContent = userName + ', you got this one wrong.  I was going to share my pile of ants with you, but now I am going to keep them all to myself.  You have answered ' + userNumCorrect + ' questions correctly.  Nice Job.';
  console.log('User has ' + userNumCorrect + ' answers correct');
}
}
var myAge = 34;
var userNumGuesses = 0; //number of guesses on the age question
function fourthQuestion() {
while (userAnswer4 != myAge) {
  userNumGuesses++;

  var userAnswer4 = prompt('Oh man ' + userName + ', I am having so much fun.  I am going to ask you another question.  How old do you think I am?  Please enter a number.');
  console.log('The user\'s fourth answer is ' + userAnswer4);

  userAnswer4 = parseInt(userAnswer4);

  if (userAnswer4 < myAge) {
    //alert('Bad news, ' + userName + '. Your answer is two low. I appreciate your optimism though!  You have guessed ' + userNumGuesses + ' times.');
    res4.textContent = 'Bad news, ' + userName + '. Your answer is two low. I appreciate your optimism though!  You have guessed ' + userNumGuesses + ' times.';
    console.log('The user has guessed ' + userNumGuesses + ' times.');
  } else if (userAnswer4 > myAge) {
    //alert(userName + ', you got this one wrong.  Your answer was too high.  I do have a lot of grey in my hair, so I understand where you are coming from.  You have guessed ' + userNumGuesses + ' times.');
    res4.textContent = userName + ', you got this one wrong.  Your answer was too high.  I do have a lot of grey in my hair, so I understand where you are coming from.  You have guessed ' + userNumGuesses + ' times.'
    console.log('The user has guessed ' + userNumGuesses + ' times.');
  } else if (isNaN(userAnswer4)) {
    //alert('Well ' + userName + ', that isn\'t even a number. You have guessed ' + userNumGuesses + ' times.')
    res4.textContent = 'Well ' + userName + ', that isn\'t even a number. You have guessed ' + userNumGuesses + ' times.';
    console.log('The user has guessed ' + userNumGuesses + ' times.');
  } else if (userAnswer4 === myAge) {
    userNumCorrect++;
    //alert('Holy Shamoley, ' + userName + ', you are right on!  I am 34 years old.  You deserve a gold star and a giant stuffed slothbear!  You answered ' + userNumCorrect + ' answers correctly, and the last question only took you ' + userNumGuesses + ' guesses!  Great job!');
    res4.textContent = 'Holy Shamoley, ' + userName + ', you are right on!  I am 34 years old.  You deserve a gold star and a giant stuffed slothbear!  You answered ' + userNumCorrect + ' answers correctly, and the last question only took you ' + userNumGuesses + ' guesses!  Great job!';
    console.log('User has ' + userNumCorrect + ' answers correct');
    console.log('The user guessed ' + userNumGuesses + ' times.');
  }

  if (userNumGuesses === 10) {
    alert('How about a hint?  I was born in 1981.');
  } else if (userNumGuesses === 20) {
    alert('How about another hint? Type the number 34 into the text box...');
  }
}
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
