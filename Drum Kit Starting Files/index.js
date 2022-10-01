'use strict';

// Detecting Button Press

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  const buttonTest = document.querySelectorAll('.drum')[i];

  buttonTest.addEventListener('click', function () {
    // this.style.color = 'white';

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener('keydown', function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      let audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      let audio1 = new Audio('sounds/tom-2.mp3');
      audio1.play();
      break;
    case 's':
      let audio2 = new Audio('sounds/tom-3.mp3');
      audio2.play();
      break;
    case 'd':
      let audio3 = new Audio('sounds/tom-4.mp3');
      audio3.play();
      break;
    case 'j':
      let audio4 = new Audio('sounds/snare.mp3');
      audio4.play();
      break;
    case 'k':
      let audio5 = new Audio('sounds/crash.mp3');
      audio5.play();
      break;
    case 'l':
      let audio6 = new Audio('sounds/kick-bass.mp3');
      audio6.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

/*
//////////////////////////
function HouseKeeper(name, workExperience, age, maritalStatus, choresYouEnjoy) {
  this.name = name;
  this.workExperience = workExperience;
  this.age = age;
  this.maritalStatus = maritalStatus;
  this.choresYouEnjoy = choresYouEnjoy;
  this.clean = function () {
    alert('Cleaning in progress...');
  };
}


const houseKeeper1 = new HouseKeeper('Maddison', '5 years', 24, 'Engaged', [
  'Mopping',
  'Sweeping',
  'Removing Cobwebs',
]);

const houseKeeper2 = new HouseKeeper('Grey', '12 years', 32, 'Divorced', [
  'Staying alive',
  'lol',
]);


// const housseKeeper1 = {
//   name: 'Maddison',
//   workExperience: '5 years',
//   age: '24',
//   maritalStatus: 'Engaged',
//   choresYouEnjoy: ['Mopping', 'Sweeping', 'Removing Cobwebs'],
// };

// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

const naMeDeyRunAm = calculator(12, 4, divide);
console.log(naMeDeyRunAm);
*/
