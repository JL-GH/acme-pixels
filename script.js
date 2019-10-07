let colors = ['green','blue','red','']

const generateNxN = (n)=> {
  //your code here
  let grid = []
  for (let i = 0; i < n; i++) {
    let arr = []
    for (let j = 0; j < n; j++) {
      arr.push(colors[Math.floor(Math.random() * colors.length)])
    }
    grid.push(arr)
  }
  return grid
};

const arr = generateNxN(5);
  /* sample output
  [
    ['red', 'blue'],//row 1
    ['green', '']//row 2
  ];
  */


const generateHTMLGrid = (arr)=> {
//your code here to generate html for a grid
  arr.forEach((elem) => {
    const createRow = document.createElement('div')
    createRow.classList.add('row')

    for (let i = 0; i < elem.length; i++) {
      const createCol = document.createElement('div')
      createCol.style.backgroundColor = elem[i]
      createRow.appendChild(createCol)
    }
    document.body.appendChild(createRow)
  })
};
generateHTMLGrid(arr);
