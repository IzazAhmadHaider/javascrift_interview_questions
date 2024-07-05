/*
Interview Question No. 1:

Given an array and a target value, find all pairs of values from the array whose sum equals the target value. Ensure that there are no duplicate pairs. For example, [[1, 2], [1, 2], [2, 1]] should be considered as a single pair. Additionally, there should be no self-addition unless the array contains multiple instances of the same number. For instance, if the target value is 6 and the array contains only one "3", then [3, 3] is invalid. However, if the array contains multiple "3"s, then [3, 3] is valid.

 */

const numbers = [2, 4, 3, 5, 7, 8, 1, 4, 5, 6, 7, 8, 9, 1, 2, 4, 4];
const targetSum = 8;
const result = findPairs(numbers, targetSum);

//For Answer Uncomment the below ↓ line
// console.log(result);

function findPairs(arr, total) {
  let result = [];
  let seen = new Set();
  let seenPairs = new Set();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let complement = total - current;

    if (seen.has(complement)) {
      let pair = [current, complement].sort();
      let pairKey = pair.toString();

      if (!seenPairs.has(pairKey)) {
        result.push(pair);
        seenPairs.add(pairKey);
      }
    }

    seen.add(current);
  }

  return result;
}

// ----------------------------------------------------------------//

// Interview Question No. 2:

/* Leet Code Problem twoSum

we have an array of number and target value both in integers we have to find indexes of First pairs which sum equals to target value but result index pairs will have no common numbers like 3,3 if target is 6. 

*/

const nums = [2, 7, 8, 1, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    const complement = target - element;

    const secvalindex = nums.findIndex(
      (el, ind) => el === complement && ind !== i
    );

    if (secvalindex !== -1) {
      return [i, secvalindex];
    }
  }
  return [];
};
// console.log(twoSum(nums, target));

// ----------------------------------------------------------------//

// Interview Question No. 3:
/* 
Leet code Problem :

Check if the provided integer is a palindrome. For example, "121" is a palindrome, but "-121" results in "121-", which is not a palindrome. Similarly, "01" and "10" are not palindromes.


*/
let value = 121;

var isPalindrome = function (x) {
  let value = x.toString();
  if (value == value.split("").reverse().join("")) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

// isPalindrome(value);

// ----------------------------------------------------------------//

// Interview Question No. 4:

// Task: Array Manipulation Example
// Scenario: You have an array of numbers, and you need to perform the following operations:

// Add an Element: Add a new number to the end of the array.
// Remove an Element: Remove a specific number from the array.
// Modify an Element: Change the value of an element at a specific position.
// Transform the Array: Convert all elements in the array to their square values.
// But All in one function

let numberforQ4 = [1, 2, 3, 4, 5];

const modificationOfArray = (arr) => {
  console.log(arr);
  const pushedArr = arr;
  pushedArr.push(8);
  console.log(pushedArr);

  const filteredArr = pushedArr.filter((pushedArr) => {
    return pushedArr != 3;
  });
  console.log(filteredArr);

  const changevalueArr = filteredArr;
  changevalueArr[0] = 100;

  console.log(changevalueArr);

  changevalueArr.forEach((element, index, array) => {
    console.log(element)
     array[index] =element * element;
  });

  console.log(changevalueArr);
};

console.log(modificationOfArray(numberforQ4));



// ----------------------------------------------------------------//
