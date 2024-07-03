//Q 1
// function sumArray(arr){
//     let sum = 0
//     for(let i = 0; i<arr.length; i++)
//     sum += arr[i]
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4]));
//Q 2
// function filterEvenNumbers(arr){
//    // let arra = new Set()
//     let arra = new Array()
//     let l = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2==0)
//             arra[l++] = arr[i];
//     }
//     return arra;
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
//Q 3
// function reverseArray(arr){
//     let rev =arr.length-1
//     for(let i = 0; i<arr.length/2; i++){
//     let temp = arr[i];
//     arr[i] = arr[rev]
//     arr[rev--] = temp
// }
// return arr
// }
// console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
//Q 4
// function removeDuplicates(arr){
//     let uniqueElements = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (uniqueElements.indexOf(arr[i]) === -1) {
//         uniqueElements.push(arr[i]);
//       }
//     }
//     return uniqueElements;
//     // for(let i = 0; i<arr.length; i++){
//     //     for(let j = i+1; j<arr.length; j++){
//     //         if(arr[i]==arr[j]){
//     //             for(var k = j; k<arr.length-1; k++){
//     //                 arr[k] = arr[k+1]
//     //             }
//     //         }
//     //     }
//     // }
//     // return arr
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
//Q 6
// function arrayIntersection(arr1, arr2){
//   let result = new Array();
//   let k = 0;
//   for(let i = 0; i<arr1.length; i++){
//     for(let j = 0; j<arr2.length; j++){
//       if(arr1[i]==arr2[j]){
//         result[k++] = arr1[i];
//       }
//     }
//   }
//   return result;
// }
// console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
//q 10
// function rotateArray(arr, num){
//     let arr1 = new Array()
//     let arr2= new Array()
//     let j = 0
//     for(let i = 0; i<arr.length; i++){
//     if(i<arr.length-num){
//     arr1[i] = arr[i]
//     }
//     else
//     arr2[j++] = arr[i]
//     }
// j = 0
// for(let i = 0; i<arr.length; i++){
//   if(i<num){
//     arr[i] = arr2[i]
//   }
//   else arr[i] = arr1[j++]
// }
// return arr
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
