const container = document.getElementById("container");
const sizeChange = document.getElementById("sizeChange");
const canvasSize = 800;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.setProperty('--canvas-size', canvasSize);
  container.style.setProperty('--row-height', canvasSize/rows);
  container.style.setProperty('--column-width', canvasSize/cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };

  const gridItem = document.querySelectorAll('.grid-item');
  gridItem.forEach((item)=> {
    item.addEventListener('mouseover', e=> e.target.classList.add('change-background')
  )});
};

function reset(){
  document.querySelectorAll('.grid-item').forEach((e)=> e.parentNode.removeChild(e));
  let canvasRows = prompt("Enter Rows(Max 100): ");
  let canvasCols = prompt("Enter Columns(Max 100): ");

  if (canvasRows>100) canvasRows=100;
  if (canvasCols>100) canvasCols=100;

  makeRows(canvasRows,canvasCols);
}




makeRows(16, 16);
sizeChange.addEventListener('click', ()=> reset());


