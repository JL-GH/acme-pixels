// let colors = ['green','blue','red','']
const addRow = document.querySelector('#addRow');
const removeRow = document.querySelector('#removeRow');
const addCol = document.querySelector('#addCol');
const removeCol = document.querySelector('#removeCol');
const grid = document.querySelector('#grid');
let selectedSwatch = document.querySelector('.colors');
selectedSwatch.classList.toggle('selected');

const colorBlocks = document.querySelectorAll('.colors');
let selectedColor = 'red';
let columns = 5;
let rows = 5;

addRow.addEventListener('click', () => {
  const newRow = document.createElement('div');
  newRow.classList.add('row');
  for (let i = 0; i < columns; i++) {
    const createCol = document.createElement('div')
    createCol.classList.add('column')
    newRow.appendChild(createCol)
  }
  document.querySelector('#grid').appendChild(newRow);
  rows++;
  initFuncs()
})

addCol.addEventListener('click', () => {
  const rowsList = document.querySelectorAll('.row');
  rowsList.forEach(r => {
    let cell = document.createElement('div');
    cell.classList.add('column');
    r.appendChild(cell);
  })
  columns++;
  initFuncs()
})

removeRow.addEventListener('click', () => {
  const grabRow = document.querySelectorAll('.row')
  let rowArr = [...grabRow]
  const lastRow = rowArr[rowArr.length - 1]

  if(rows === 1) {
    return
  }

  grid.removeChild(lastRow)

  rows--
  initFuncs()
})

removeCol.addEventListener('click', () => {
  const grabRow = document.querySelectorAll('.row')

  if (columns === 1) {
    return
  }

  grabRow.forEach(r => {
    r.removeChild(r.lastChild)
  })

  columns--
  initFuncs()
})

colorBlocks.forEach(block => {
  block.addEventListener('click', (ev) => {
    selectedColor = ev.target.style.backgroundColor;
    ev.target.classList.toggle('selected')
    console.log(selectedColor);
    selectedSwatch.classList.toggle('selected')
    selectedSwatch = ev.target
  })
})

const generateNxN = (n)=> {
  let grid = []
  for (let i = 0; i < n; i++) {
    let arr = []
    for (let j = 0; j < n; j++) {
      arr.push('')
    }
    grid.push(arr)
  }
  return grid
};

const arrs = generateNxN(5);

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
generateHTMLGrid(arrs);

//add events to gird
const initFuncs = () => {
  const gridColumns = document.querySelectorAll('.column');
  const colorMeEvent = (ev) => {
    ev.target.style.backgroundColor = selectedColor;
  }
  const colorDrag = (ev) => {
    ev.target.style.backgroundColor = selectedColor;
    grid.addEventListener('mouseover', colorMeEvent)
  }
  const mouseUp = () => {
    grid.removeEventListener('mouseover', colorMeEvent)
  }

  //addevent mouseleave grid in order to stop the color drag bug when exiting grid
  grid.addEventListener('mouseleave', () => {
    grid.removeEventListener('mouseover', colorMeEvent)
  })
  //add mousedown and mouse up triggers to all the cells
  gridColumns.forEach((elem) => {
    elem.addEventListener('mousedown', colorDrag)
    elem.addEventListener('mouseup', mouseUp)
  })

  //original click event
  // gridColumns.forEach(cell => {
  //   cell.addEventListener('click', (ev) => {
  //     ev.target.style.backgroundColor = selectedColor;
  //   })
  // })
}

initFuncs()
