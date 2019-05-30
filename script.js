const container = document.querySelector('.container');

function createDivs() {
  for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = `I'm a div`;
    container.appendChild(newDiv);
  }
}

createDivs();