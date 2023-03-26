console.log('Hello!');

let box = document.querySelector('#box1');
let colorName = document.querySelector('#color-name');
let timerNum = document.querySelector('#timer');
const colors = [
  'red',
  'blue',
  'green',
  'brown',
  'pink',
  'yellow',
  'gray',
  'purple',
  'orange',
  'black',
];

let myNum = 0;

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 10);

  box.style.backgroundColor = colors[randomNumber];
  box.style.color = 'white';
  colorName.innerText = colors[randomNumber];
  timerNum.innerText = myNum;
  // colorName.style.color = colors[randomNumber];
  myNum++;
}

setInterval(randomColor, 1000);
