const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function changeColor(item){
}

makeRows(16, 16);

const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach((item)=> {
    item.addEventListener('mouseover', changeColor(item));
});
