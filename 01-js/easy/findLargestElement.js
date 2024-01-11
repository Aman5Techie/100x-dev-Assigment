/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length == 0){
        return undefined;
    }
    let a = numbers[0];
    
    for (let index = 1; index < numbers.length; index++) {
        if(numbers[index]>a){
            a = numbers[index];
        }
        
    }

    return a;
}

module.exports = findLargestElement;