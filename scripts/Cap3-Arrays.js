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

// const matrix3x3 = [];

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


let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let iterator = numbers.keys();

for (const n of iterator) {
  console.log(n);

  
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

// let numbers = Array.of(1, 2, 3, 4, 5, 6);
// numbers.copyWithin(0, 2, 3);
// console.log("Array 1", numbers);

// let numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
// numbers.reverse();

// console.log("numbers", numbers);

// // numbers.sort((a, b) => a - b);
// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   } else return 0;
// }
// numbers.sort(compare);

// console.log("numbers", numbers);


// const friends = [
//   { name: 'John', age: 30 },
//   { name: 'Ana', age: 20 },
//   { name: 'Chris', age: 25 }, 
// ];

// friends.sort((a,b) => a.age-b.age)



// function compare(a,b){
//   if(a.age < b.age){
//     return - 1
//   }
//   if(a.age > b.age){
//     return 1
//   }
//   else 
//   return 0 
// }
// friends.sort(compare)
// console.log(friends)

// let names = ['Ana', 'ana', 'john', 'John'];

// names.sort((a,b) => a.localeCompare(b))

// console.log(names)

// let numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

// numbers.indexOf(10)
// let numberIndex = numbers.indexOf(10)
// let numberLastIndex = numbers.lastIndexOf(9)

// console.log(numberIndex)
// console.log(numberLastIndex)

// numbers.push(10)

// console.log(numbers)

// let numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

// function mult13(element, index, array){
//   return (element % 13 == 0)
// }

// console.log(numbers.find(mult13))
// console.log(numbers.findIndex(mult13))


let numbers = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

numbers.toString()

console.log(numbers.toString())

console.log(numbers.join('-'))


