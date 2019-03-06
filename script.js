// let colors = ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(255, 0, 255)'];

let colors = generateRandomColors(6);
let numberOfSquares = 6;

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();

const colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

const messageDisplay = document.getElementById('message');

const h1 = document.querySelector('h1');


const easyBtn = document.querySelector('#easyBtn');
easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

const hardBtn = document.querySelector('#hardBtn');
hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
  }
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
  //generate all new color
  colors = generateRandomColors(numberOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  this.textContent = 'New Colors';
  messageDisplay.textContent = '';
  //change colors of squares
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = 'steelblue';
});

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  const square = squares[i];
  square.style.backgroundColor = colors[i];
  //add click listeners to squares
  square.addEventListener('click', function () {
    //grab color of clicked square
    const clickedColor = this.style.backgroundColor;
    //compare color to pickColor
    //! console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    //change each square to match given color
    square.style.backgroundColor = color;
  }
}

function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  const arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get random color push into arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a 'red' from 0 - 255
  const r = Math.floor(Math.random() * 256);
  //pick a 'green' from 0 -255
  const g = Math.floor(Math.random() * 256);
  //pick a 'blue' from 0-255
  const b = Math.floor(Math.random() * 256);
  //rgb(r, g, b)
  return `rgb(${r}, ${g}, ${b})`;
}
