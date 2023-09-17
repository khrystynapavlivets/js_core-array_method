// Завдання 1.

// Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.

// const arr1 = arrCopy([1,2,3]) – запише в змінну масив [1,2,3].
// const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну масив [1,2,3,[10,20]].
// ------------------------------------------------------------------------------------------



// const arrCopy = (arr)=>{
//     return arr.slice();
// }

// const arr1 = arrCopy([1, 2, 3]); 
// const arr2 = arrCopy([1, 2, 3, [10, 20]]); 

// console.log(arr1);
// console.log(arr2);







// Завдання 2.

// Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:

// const arr1 = arrToString([1,2,3]) – запише в змінну масив [‘1’,‘2’,‘3’].
// const arr2 = arrToString([10,200,3333]) – запише в змінну масив [‘10’,‘200’,‘3333’].
// ------------------------------------------------------------------------------------------


// 1 спосіб( for...in)

// function arrToString(arr){
//     const resultArr = [];
//     for (const index in arr) {
//         resultArr[index] = arr[index].toString();
//     }
// return resultArr;
// }  

// const arr1 = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,3333]) ;

// console.log(arr1);
// console.log(arr2);








// 2 спосіб (forEach)

// function arrToString(arr){
//     const resultArr = [];
// arr.forEach(value => {
//     resultArr.push(value.toString());
// })
// return resultArr;
// }  

// const arr1 = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,3333]) ;

// console.log(arr1);
// console.log(arr2);






// Завдання 3.

// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:

// const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3].
// const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8].
// ------------------------------------------------------------------------------------------


// 1 спосіб (forEach)

// function getLength(arr) {
//     const resultArr = [];
// arr.forEach((value,index,arr) => {
//     resultArr[index]=arr[index].length;
// });
// return  resultArr;
// }
// const arr1 = getLength(['Ivan','Pavlo','Ira']);
// const arr2 = getLength(['Oleksiy','Andriana']);

// console.log(arr1);
// console.log(arr2);



// 2 спосіб (for)

// function getLength(arr) {
//     var resultArr  = [];
//     for (var i = 0; i < arr.length; i++) {
//         resultArr.push(arr[i].length);
//     }
//     return resultArr ;
//   }
//   const arr1 = getLength(['Ivan','Pavlo','Ira']);
//   const arr2 = getLength(['Oleksiy','Andriana']);

// console.log(arr1);
// console.log(arr2);








// Завдання 4.

// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок
//  і повертає новий масив де виключені елементи,
//  що повторюються з масиву arr(ігнорувати чутливість до регістру):

// const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’].
// const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]).
// ------------------------------------------------------------------------------------------


// 1 спосіб (filter)

// function removeDuplicates(arr){
//     let resultArr = arr.filter(function(word, index, self) {
//         const lowerCaseElement = word.toLowerCase();
//         return self.indexOf(lowerCaseElement) === index; // видалення повторень
//       });
//       let result = resultArr.join(' ');
//     return result;
// }

// const arr1 = removeDuplicates(['html','css','html','js']);
// const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

// console.log(arr1);
// console.log(arr2);






// 2 спосіб (forEach)

function removeDuplicates(arr) {
const uniqueArr = [];
arr.forEach((element) => {
  const lowerCaseElement = element.toLowerCase();
  if (!uniqueArr.includes(lowerCaseElement)) {
    uniqueArr.push(lowerCaseElement);
  }
});
return uniqueArr;
}

const arr1 = removeDuplicates(['html','css','html','js']);
const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']);

console.log(arr1);
console.log(arr2);


