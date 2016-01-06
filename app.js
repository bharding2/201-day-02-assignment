var userName = prompt('Welcome to the guessing game.  What is your name?');
console.log('The user\'s name is ' + userName);

var userAnswer1 = prompt('First question!  This is a yes/no question, ' + userName + ', so please answer with Y or N.  Was I born in Alaska?');
console.log('The user\'s first answer is ' + userAnswer1);

//toUpperCase()

if (userAnswer1.toUpperCase() === 'Y' || userAnswer1.toUpperCase() === 'YES') {
  alert('Good job ' + userName + ', you are right!  I was born in Alaska.  The doctor had me fight a polar bear inside our igloo, as is tradition');
} else {
  alert('Too bad ' + userName + ', you are wrong!  I was born in Alaska.  You better bone up on your trivia.');
}

var userAnswer2 = prompt('Alright ' + userName + ', next question! This is a yes/no question, so please answer with Y or N.  Are my eyes blue?');
console.log('The user\'s second answer is ' + userAnswer2);

if (userAnswer2.toUpperCase() === 'Y' || userAnswer2.toUpperCase() === 'YES') {
  alert('Great choice ' + userName + '!  My eyes are blue and dark, like a stormy sea');
} else {
  alert('Rough luck ' + userName +', you are wrong.  You should spend more time staring at my face.');
}

var userAnswer3 = prompt('You are doing great ' + userName + ', lets keep moving!  This is another yes/no question, so please answer with Y or N.  Is my favorite animal the slothbear?');
console.log('The user\'s third answer is ' + userAnswer3);

if (userAnswer3.toUpperCase() === 'Y' || userAnswer3.toUpperCase() === 'YES') {
  alert('Right you are ' + userName + '!  My favorite animal is the slothbear.  Lets make some vacuum noises to celebrate!');
} else {
  alert(userName + ', you got this one wrong.  I was going to share my pile of ants with you, but now I am going to keep them all to myself.');
}

var userAnswer4 = prompt('Oh man ' + userName + ', I am having so much fun.  I am going to ask you another question.  How old do you think I am?  Please enter a number.');
console.log('The user\'s fourth answer is ' + userAnswer4);

userAnswer4 = parseInt(userAnswer4);

var myAge = 34;
if (userAnswer4 < myAge) {
  alert('Bad news, ' + userName + '. Your answer is two low. I appreciate your optimism though!');
} else if (userAnswer4 > myAge) {
  alert(userName + ', you got this one wrong.  Your answer was too high.  I do have a lot of grey in my hair, so I understand where you are coming from.');
} else if (userAnswer4 === myAge) {
  alert('Holy Shamoley, ' + userName + ', you are right on!  You deserve a gold star and a giant stuffed slothbear!');
}


/* counter
need a new variable
need to update the variable

var counter = 0, if correct counter++

while loop, test while answer is wrong, keep asking questions
*/
