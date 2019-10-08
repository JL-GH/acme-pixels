// let colors = ['green','blue','red','']
const addRow = document.querySelector('#addRow');
const removeRow = document.querySelector('#removeRow');
const addCol = document.querySelector('#addCol');
const removeCol = document.querySelector('#removeCol');

const colorBlocks = document.querySelectorAll('.colors');
let selectedColor = '';
let columns = 5;
let rows = 5;

addRow.addEventListener('click', ev => {
  const newRow = document.createElement('div');
  newRow.classList.add('row');
  for (let i = 0; i < columns; i++) {
    const createCol = document.createElement('div')
    createCol.classList.add('column')
    newRow.appendChild(createCol)
  }
  document.querySelector('#grid').appendChild(newRow);
  rows++;
})

addCol.addEventListener('click', ev => {
  const rowsList = document.querySelectorAll('.row');
  rowsList.forEach(r => {
    let cell = document.createElement('div');
    cell.classList.add('column');
    r.appendChild(cell);
  })
  columns++;
})

colorBlocks.forEach(block => {
  block.addEventListener('click', (ev) => {
    selectedColor = ev.target.style.backgroundColor;
    console.log(selectedColor);
  })
})

const generateNxN = (n)=> {
  //your code here
  let grid = []
  for (let i = 0; i < n; i++) {
    let arr = []
    for (let j = 0; j < n; j++) {
      // arr.push(colors[Math.floor(Math.random() * colors.length)])
      arr.push('')
    }
    grid.push(arr)
  }
  return grid
};

const arr = generateNxN(5);

const generateHTMLGrid = (arr)=> {
//your code here to generate html for a grid
  arr.forEach((elem) => {
    const createRow = document.createElement('div')
    createRow.classList.add('row')

    for (let i = 0; i < elem.length; i++) {
      const createCol = document.createElement('div')
      createCol.classList.add('column')
      createRow.appendChild(createCol)
    }
    document.querySelector('#grid').appendChild(createRow)
  })
};
generateHTMLGrid(arr);

const gridColumns = document.querySelectorAll('.column');
gridColumns.forEach(cell => {
  cell.addEventListener('click', (ev) => {
    ev.target.style.backgroundColor = selectedColor;
  })
})
