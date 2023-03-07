// todo: random generator that after putting your name, determines who starts first
// todo: Put timer that when it finishes you lose the game


window.addEventListener('load', function(){
  setTimeout(
    function () {
      document.querySelector('.description').style.display = 'block'
    },
    500
  )
  });

document.querySelector('#close-button').addEventListener('click', function(){
  document.querySelector('.description').style.display = 'none'
})
document.querySelector('#close-link').addEventListener('click', function(e){
  e.preventDefault(); // this is for href atribute of a in html. Without it href element would refresh page 
  document.querySelector('.description').style.display = 'none'
})







// HTML Elements
const statusDiv = document.querySelector('.status');               
const resetDiv = document.querySelector('.reset');               
const cellDivs = document.querySelectorAll('.game-cell');             
const popupTitle = document.querySelector('.popup-title')
const popupReset = document.querySelector('.popup-reset')

// game constants
const xSymbol = '×';          
const oSymbol = '○';          

// game variables
let gameIsLive = true;    
let gameIsTie = false       
let xIsNext = true;           


// functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;   
function handleGameEnd() {
  if (!gameIsLive) {
    document.querySelector('.game-over').style.display = 'block'
  }
}
function handleGameTie (){
  if (gameIsTie = true){
    statusDiv.innerHTML = 'Game is tied, equality';   
    statusDiv.style.borderLeft = '4px solid rgb(0, 255, 8)';
    statusDiv.style.backgroundColor = 'black'
    statusDiv.style.color = 'rgb(0, 255, 8)'
    document.querySelector('.game-over').style.display = 'block'
  } 
}

// handleWin(letter).style.color = 'green'
const handleWin = (letter) => {                                          
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    statusDiv.style.borderLeft = '4px solid rgb(0, 255, 8)';
    statusDiv.style.backgroundColor = 'black'
    statusDiv.style.color = 'rgb(0, 255, 8)'
    statusDiv.style.transition = '0.5s'
  } else {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    statusDiv.style.borderLeft = '4px solid rgb(0, 255, 8)';
    statusDiv.style.backgroundColor = 'black'
    statusDiv.style.color = 'rgb(0, 255, 8)'
    statusDiv.style.transition = '0.5s'
  }
  setTimeout(handleGameEnd, 1000);
  }



const checkGameStatus = () => {                                                           
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const bottomMiddle = cellDivs[7].classList[1];
  const bottomRight = cellDivs[8].classList[1];

  // check winner                                                                        //Logic of  writing places of all winning combination
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {  
    gameIsLive = false
    gameIsTie = true
    setTimeout(handleGameTie, 700);
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} now is your turn`;   
      statusDiv.style.color = 'white'
      statusDiv.style.borderLeft = '4px solid white';
    } else {
      statusDiv.innerHTML = `${oSymbol} now is you turn `; 
      statusDiv.style.color = 'gold'
      statusDiv.style.borderLeft = '4px solid gold';
    }
  }
};


// event Handlers
const handleReset = () => {                                             
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} now is your turn`;   
  statusDiv.style.color = 'white'
  statusDiv.style.borderLeft = '4px solid white';
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
}
const handlePopupReset = () =>{                                       
  xIsNext = true
  statusDiv.innerHTML = `${xSymbol} now is your turn`;   
  statusDiv.style.color = 'white'
  statusDiv.style.borderLeft = '4px solid white';
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
  document.querySelector('.game-over').style.display = 'none'
}







const handleCellClick = (e) => {                                       
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {   
    return;
  }

  if (xIsNext) {                                                       
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
};


// event listeners
resetDiv.addEventListener('click', handleReset);  
popupReset.addEventListener('click', handlePopupReset)                  

for (const cellDiv of cellDivs) {                                   
  cellDiv.addEventListener('click', handleCellClick)
}



















// window.addEventListener('load', function(){
//   setTimeout(
//     function () {
//       document.querySelector('.description').style.display = 'block'
//     },
//     500
//   )
//   });

// document.querySelector('#close-button').addEventListener('click', function(){
//   document.querySelector('.description').style.display = 'none'
// })
// document.querySelector('#close-link').addEventListener('click', function(e){
//   e.preventDefault(); // this is for href atribute of a in html. Without it href element would refresh page 
//   document.querySelector('.description').style.display = 'none'
// })







// // HTML Elements
// const statusDiv = document.querySelector('.status');          // interacting with elements from HTML through DOM      
// const resetDiv = document.querySelector('.reset');            // interacting with elements from HTML through DOM    
// const cellDivs = document.querySelectorAll('.game-cell');     // interacting with elements from HTML through DOM         
// const popupTitle = document.querySelector('.popup-title')
// const popupReset = document.querySelector('popup-reset')

// // game constants
// const xSymbol = '×';             // special signs of constants of the game
// const oSymbol = '○';             // special signs of constants of the game

// // game variables
// let gameIsLive = true;           // if gameIsLive becomes false game finishes
// let xIsNext = true;              // if xIsNext false it would be turn of o


// // functions
// const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;   // ternary statement: if there is no x print xSymbol; if there is print oSymbol
// function handleGameEnd() {
//   if (!gameIsLive) {
//     document.querySelector('.game-over').style.display = 'block'
//   }
// }

// // handleWin(letter).style.color = 'green'
// const handleWin = (letter) => {                                          // function that shows text to notify the winner
//   gameIsLive = false;
//   if (letter === 'x') {
//     statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
//     statusDiv.style.borderLeft = '4px solid rgb(0, 255, 8)';
//     statusDiv.style.backgroundColor = 'black'
//     statusDiv.style.color = 'rgb(0, 255, 8)'
//     statusDiv.style.transition = '0.5s'
//   } else {
//     statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
//   }
//   setTimeout(handleGameEnd, 1000);
//   popupTitle.innerHTML = `Game finished,  ${letterToSymbol(letter)} has won!`;
//   popupReset.addEventListener('click', handlePopupReset)
//   }



// const checkGameStatus = () => {                                                           // function of listening all winning combination
//   const topLeft = cellDivs[0].classList[1];
//   const topMiddle = cellDivs[1].classList[1];
//   const topRight = cellDivs[2].classList[1];
//   const middleLeft = cellDivs[3].classList[1];
//   const middleMiddle = cellDivs[4].classList[1];
//   const middleRight = cellDivs[5].classList[1];
//   const bottomLeft = cellDivs[6].classList[1];
//   const bottomMiddle = cellDivs[7].classList[1];
//   const bottomRight = cellDivs[8].classList[1];

//   // check winner                                                                        //Logic of  writing places of all winning combination
//   if (topLeft && topLeft === topMiddle && topLeft === topRight) {
//     handleWin(topLeft);
//     cellDivs[0].classList.add('won');
//     cellDivs[1].classList.add('won');
//     cellDivs[2].classList.add('won');
//   } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
//     handleWin(middleLeft);
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[5].classList.add('won');
//   } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
//     handleWin(bottomLeft);
//     cellDivs[6].classList.add('won');
//     cellDivs[7].classList.add('won');
//     cellDivs[8].classList.add('won');
//   } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
//     handleWin(topLeft);
//     cellDivs[0].classList.add('won');
//     cellDivs[3].classList.add('won');
//     cellDivs[6].classList.add('won');
//   } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
//     handleWin(topMiddle);
//     cellDivs[1].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[7].classList.add('won');
//   } else if (topRight && topRight === middleRight && topRight === bottomRight) {
//     handleWin(topRight);
//     cellDivs[2].classList.add('won');
//     cellDivs[5].classList.add('won');
//     cellDivs[8].classList.add('won');
//   } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
//     handleWin(topLeft);
//     cellDivs[0].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[8].classList.add('won');
//   } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
//     handleWin(topRight);
//     cellDivs[2].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[6].classList.add('won');
//   } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {  
//     gameIsLive = false;
//     statusDiv.innerHTML = 'Game is tied!';   
//     statusDiv.style.borderLeft = '4px solid rgb(0, 255, 8)';
//     statusDiv.style.backgroundColor = 'black'
//     statusDiv.style.color = 'rgb(0, 255, 8)'
//   } else {
//     xIsNext = !xIsNext;
//     if (xIsNext) {
//       statusDiv.innerHTML = `${xSymbol} now is your turn`;   
//       statusDiv.style.color = 'white'
//       statusDiv.style.borderLeft = '4px solid white';
//     } else {
//       statusDiv.innerHTML = `<span>${oSymbol} now is you turn </span>`; 
//       statusDiv.style.color = 'gold'
//       statusDiv.style.borderLeft = '4px solid gold';
//     }
//   }
// };


// // event Handlers
// const handleReset = () => {                                             // reset bottom: remove x, 0, won. Bring text of xSymbol is next. Change style of status (text)
//   xIsNext = true;
//   statusDiv.innerHTML = `${xSymbol} now is your turn`;   
//   statusDiv.style.color = 'white'
//   statusDiv.style.borderLeft = '4px solid white';
//   for (const cellDiv of cellDivs) {
//     cellDiv.classList.remove('x');
//     cellDiv.classList.remove('o');
//     cellDiv.classList.remove('won');
//   }
//   gameIsLive = true;
// }
// const handlePopupReset = () => {                                             // reset bottom: remove x, 0, won. Bring text of xSymbol is next. Change style of status (text)
//   for (const cellDiv of cellDivs) {
//     cellDiv.classList.remove('x');
//     cellDiv.classList.remove('o');
//     cellDiv.classList.remove('won');
//   }
//   gameIsLive = true;
//   document.querySelector('.game-over').style.display = 'none'
// };






// const handleCellClick = (e) => {                                       // function that adds x or o to as 2nd class of grid-cells.
//   const classList = e.target.classList;

//   if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {   // x or o. Not both or multiple
//     return;
//   }

//   if (xIsNext) {                                                       // first adds x then o then x then o. 
//     classList.add('x');
//     checkGameStatus();
//   } else {
//     classList.add('o');
//     checkGameStatus();
//   }
// };


// // event listeners
// resetDiv.addEventListener('click', handleReset);                     // while clicking to resetDiv it declares handleReset function

// for (const cellDiv of cellDivs) {                                    // while clicking in grid-cells that are children of grid it declares handleCellClick which adds x or o to element as addition class
//   cellDiv.addEventListener('click', handleCellClick)
// }



