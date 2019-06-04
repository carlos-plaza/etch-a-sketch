const container = document.querySelector('.container');
const topMenu = document.querySelector('.top-menu');

const newGridBtn = document.createElement('button');
newGridBtn.textContent = 'New Grid';
topMenu.appendChild(newGridBtn);

function generateRandomColor() {
  let rgbValues = [];
  for (let i = 0; i < 3; i++) {
    let randomValue = Math.floor(Math.random() * 256);
    rgbValues.push(randomValue);
  }

  let randomColor = `rgb(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
  return randomColor;
}

function createDivs(num) {

  let gridSize = num * num;
  console.log(gridSize);
  for (let i = 0; i < gridSize; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
  }
}

function attachEventsToGridDivs() {
  let gridDivs = document.querySelectorAll(".container > div");
  gridDivs.forEach(element => {
    element.addEventListener('mouseover', function() {
      element.style.background = generateRandomColor();
    });
  });
}

function newGrid() {
  // let gridDivs = document.querySelectorAll(".container > div");
  // gridDivs.forEach(element => {
  //   element.style.background = '#fff';
  // });

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let gridSize = parseInt( prompt('How many squares per side?','Min: 16, Max: 64') );
  createDivs(gridSize);
  attachEventsToGridDivs();
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

window.addEventListener("load", createDivs(16));
window.addEventListener("load", attachEventsToGridDivs);

newGridBtn.addEventListener("click", newGrid);