var greeting1 = document.getElementById('greeting');
var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var res5 = document.getElementById('result5');
var userName = prompt('Welcome to the guessing game.  What is your name?');
var correct1 = document.getElementById('correctCount') ;
var userNumCorrect = 0; //number of questions answered correctly
if (userName === '') {
  userName = 'Sloth Bearson';
}

var quesData = [
  ['First question!  This is a yes/no question, ' + userName + ', so please answer with Y or N.  Was I born in Alaska?','Y','YES','Good job ' + userName + ', you are right!  I was born in Alaska.  The doctor had me fight a polar bear inside our igloo, as is tradition.','Too bad ' + userName + ', you are wrong!  I was born in Alaska.  You better bone up on your trivia.',res1],

  ['Alright ' + userName + ', next question! This is a yes/no question, so please answer with Y or N.  Are my eyes blue?','Y','YES', 'Great choice ' + userName + '!  My eyes are blue and dark, like a stormy sea.','Rough luck ' + userName +', you are wrong.  You should spend more time staring at my face.',res2 ],

  ['You are doing great ' + userName + ', lets keep moving!  This is another yes/no question, so please answer with Y or N.  Is my favorite animal the slothbear?','Y','YES','Right you are ' + userName + '!  My favorite animal is the slothbear.  Lets make some vacuum noises to celebrate!',userName + ', you got this one wrong.  I was going to share my pile of ants with you, but now I am going to keep them all to myself.',res3]
];


function userGreeting () {
  greeting1.textContent = 'Hello, ' + userName + '!  I have a few questions to ask you.';
}

userGreeting();

function correctCounter() {
  correct1.textContent = 'Correct Answer Count: ' + userNumCorrect + ' questions correct.';
}

function imageInsert(rightwrong) {
  var insertCorrectImage = '<br /><img src="correct.png" />';
  var insertIncorrectImage = '<br /><img src="incorrect.png" />';

  if (rightwrong === 'correct') {
    return insertCorrectImage;
  } else {
    return insertIncorrectImage;
  }
}

function questions() {
  var userAnswer1 = prompt(quesData[i][0]);

  if (userAnswer1.toUpperCase() === quesData[i][1] || userAnswer1.toUpperCase() === quesData[i][2]) {
    userNumCorrect++;
    correctCounter();
    quesData[i][5].textContent = quesData[i][3];
    quesData[i][5].className='right';
    quesData[i][5].innerHTML += imageInsert('correct');

    } else {
    quesData[i][5].textContent = quesData[i][4];
    quesData[i][5].className='wrong';
    quesData[i][5].innerHTML += imageInsert('incorrect');
    }
}

for (i = 0; i < quesData.length; i++) {
questions();

}

var myAge = 34;
var userNumGuesses = 0; //number of guesses on the age question

function fourthQuestion() {
  while (userAnswer4 !== myAge) {
    userNumGuesses++;

    var userAnswer4 = prompt('Oh man ' + userName + ', I am having so much fun.  I am going to ask you another question.  How old do you think I am?  Please enter a number.');
    console.log('The user\'s fourth answer is ' + userAnswer4);

    userAnswer4 = parseInt(userAnswer4);

    if (userAnswer4 < myAge) {
      res4.textContent = 'Bad news, ' + userName + '. Your answer is two low. I appreciate your optimism though!  You have guessed ' + userNumGuesses + ' times.';
      console.log('The user has guessed ' + userNumGuesses + ' times.');
    } else if (userAnswer4 > myAge) {
      res4.textContent = userName + ', you got this one wrong.  Your answer was too high.  I do have a lot of grey in my hair, so I understand where you are coming from.  You have guessed ' + userNumGuesses + ' times.'
      console.log('The user has guessed ' + userNumGuesses + ' times.');
    } else if (isNaN(userAnswer4)) {
      res4.textContent = 'Well ' + userName + ', that isn\'t even a number. You have guessed ' + userNumGuesses + ' times.';
      console.log('The user has guessed ' + userNumGuesses + ' times.');
    } else if (userAnswer4 === myAge) {
      userNumCorrect++;
      correctCounter();

      res4.textContent = 'Holy Shamoley, ' + userName + ', you are right on!  I am 34 years old.  You deserve a gold star and a giant stuffed slothbear!  You have answered ' + userNumCorrect + ' answers correctly, and guessing my age only took you ' + userNumGuesses + ' guesses!  Great job!';
      res4.className = 'right';
      res4.innerHTML += imageInsert('correct');
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

function fifthQuestion() {
  var favPlayers = ['Elwood Finch', 'Randy Baribeau', 'Roger Wilcox', 'Bernard Boulanger', 'Izcautzin Arizmendi', 'Pigmalion Mpalotis'];

  var userAnswer4 = prompt('This one is a doozy ' + userName +'. Name one of my 6 favorite FC Slothbear players.');
  console.log('User\'s fifth answer is ' + userAnswer4);

  var correctAnswer = false;
  for (i = 0; i < favPlayers.length; i++) {
    if (userAnswer4 === favPlayers[i]) {
      correctAnswer = true;
    }
  }

  if (correctAnswer) {
    res5.textContent = userName + ' I am so impressed. ' + userAnswer4 + ' IS one of my favorite FC Slothbear players!';
    res5.className = 'right';
    res5.innerHTML = imageInsert('correct');
  } else {
    res5.textContent = 'Sorry, ' + userName + '. Here are my 6 favorite FC Slothbear players: ' + favPlayers.join(', ') + '.';
    res5.className = 'wrong';
    res5.innerHTML += imageInsert('incorrect');
  }
}


fourthQuestion();
fifthQuestion();
