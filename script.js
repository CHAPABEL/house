const loadingBar = document.querySelector(".loading--bar");

function addSquares() {
  const barWidth = loadingBar.offsetWidth;
  const squareWidth = 10;
  const gap = 2;
  const totalSquareWidth = squareWidth + gap;

  const numberOfSquares = Math.floor(barWidth / totalSquareWidth);
  loadingBar.innerHTML = "";
  for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("loading--square");
    loadingBar.appendChild(square);

    setTimeout(() => {
      square.style.opacity = "1";
    }, i * 200);
  }
  setTimeout(() => {
    addSquares();
  }, numberOfSquares * 200 + 1000);
}

window.onload = addSquares;
