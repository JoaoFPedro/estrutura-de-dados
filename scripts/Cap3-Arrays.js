// numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Array.prototype.reIndex = function(myArray) {
//     const newArray = [];
//     for(let i = 0; i < myArray.length; i++ ) {
//       if (myArray[i] !== undefined) {
//         console.log('ReIndex',myArray[i])

//         newArray.push(myArray[i]);
//       }
//     }
//     console.log(myArray)
//     return newArray;
//   }
// // remove first position manually and reIndex
// Array.prototype.removeFirstPosition = function() {
//     for (let i = 0; i < this.length; i++) {
//       this[i] = this[i + 1];
//     }
//     return this.reIndex(this);
//   };

//   numbers = numbers.removeFirstPosition();
//   console.log('Removed first with removeFirstPosition + reIndex', numbers);

//   numbers.shift()

//   console.log('number com o metodo shift: ', numbers)

// numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // numbers.splice(0,2)

// // console.log('Antes de add',numbers)

// numbers.splice(0,0,-6,-5)

// console.log('Dps de add:', numbers)

// let avarageTemp=[]
// avarageTemp[0] = [71,72,73,75]
// avarageTemp[1] = [63,25,44,12]

// Array.prototype.printMatrix = function(myMatrix){
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this[i].length; j++){
//             console.log(this[i][j])

//         }
//         return this
//     }

// }

// avarageTemp = avarageTemp.printMatrix(this)
// console.log(avarageTemp)

// let averageTemp = [];

// // same as
// averageTemp[0] = [72, 75, 79, 79, 81, 81];
// averageTemp[1] = [81, 79, 75, 75, 73, 73];

// function printMatrix(myMatrix) {
//   for (let i = 0; i < myMatrix.length; i++) {
//     for (let j = 0; j < myMatrix[i].length; j++) {
//       console.table(myMatrix[i][j]);
//     }
//   }
// }

//  printMatrix(averageTemp);
// console.table( averageTemp);

// document.write( averageTemp)

{
  /*
       Matrix multidimensional
  // const matrix3x3 = [];
// for (let i = 0; i < 3; i++) {
//   matrix3x3[i] = [];

//   for (let j = 0; j < 3; j++) {
//     matrix3x3[i][j] = [];
//     for (let z = 0; z < 3; z++) {
//       matrix3x3[i][j][z] = i + j + z;
//     }
//   }
// }
// console.log(matrix3x3[0][0][1]);
// for (let i = 0; i < matrix3x3.length; i++) {
//   for (let j = 0; j < matrix3x3[i].length; j++) {
//     for (let z = 0; z < matrix3x3[i][j].length; z++) {}
//   }
// }
  
  */
}

{
  /*
   Juntando arrays
  const zero = 0
  const positiveNumbers = [1,2,3]
  const negativeNumbers = [-3,-2,-1]

  let numbers = negativeNumbers.concat(zero, positiveNumbers);

  console.log('Numbers:' ,numbers)
  */
}





let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
numbers.forEach(x => console.log(x % 2 ===0))