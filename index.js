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
  // console.log(pushedArr);

  const filteredArr = pushedArr.filter((pushedArr) => {
    return pushedArr != 3;
  });
  // console.log(filteredArr);

  const changevalueArr = filteredArr;
  changevalueArr[0] = 100;

  // console.log(changevalueArr);

  changevalueArr.forEach((element, index, array) => {
    console.log(element);
    array[index] = element * element;
  });

  // console.log(changevalueArr);
};

// console.log(modificationOfArray(numberforQ4));

// ----------------------------------------------------------------//

// Interview Question No. 5:

/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

let strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  if (strs.length <= 0) return "";
  let istel = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(istel) !== 0) {
      istel = istel.substring(0, istel.length - 1);
      if (istel === "") return "";
    }
  }
  return istel;
};

// console.log(longestCommonPrefix(strs));

// ----------------------------------------------------------------//

// Interview Question No. 5:

/*
Write a Function which takes a string and returns boolean if starting paranthesis have corresponding closing paranthesis .
 */

var isValid = function (s) {
  const arr = [];
  const corresponding_paranthesis = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i of s) {
    if (i === "(" || i === "[" || i === "{") {
      arr.push(i);
    } else if (i === ")" || i === "}" || i === "]") {
      let lastvalue = arr.pop();

      if (i !== corresponding_paranthesis[lastvalue]) {
        return false;
      }
    }
  }
  return arr.length === 0;
};

// console.log(isValid("()"))
// console.log(isValid("(){}[]"))
// console.log(isValid("(]){"))
// console.log(isValid("({[]})"))

// ----------------------------------------------------------------//

// Interview Question No. 6:

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

var mergeTwoLists = function (list1, list2) {
  const list3 = [...list1, ...list2];
  return list3.sort();
};

// console.log( mergeTwoLists(list1, list2))

// -----------------------------------------------------------------//

// Interview Question No. 7:

// Question: How would you remove duplicate elements from an array in JavaScript? Can you provide multiple methods to achieve this?

const array = [1, 2, 3, 4, 4, 5, 6, 1, 2];
const uniqueArray = array.filter((val, i, self) => self.indexOf(val) === i);
// console.log(uniqueArray);

// 2nd Method

const newarr = [...new Set(array)];

// console.log(newarr)

// -----------------------------------------------------------------//

// Interview Question No. 7:

// Write a function called findPairsWithSum that takes an array of integers and a target sum as arguments and returns all unique pairs of integers in the array that add up to the target sum. Each pair should be returned as an array, and the function should return an array of these pairs. Ensure that each pair is unique and the order of the pairs does not matter.

// Input: [1, 2, 3, 4, 3, 5], 6
// Output: [[1, 5], [2, 4], [3, 3]]

const inputArray = [1, 2, 3, 4, 3, 5 ,1];
const target2 = 6;

function findPairsWithSum(input, target) {
  const matchedpairs = [];
  const seen = new Set();

  input.forEach((current) => {
    const complement = target - current;

    if (seen.has(complement)) {
      const pair = [complement, current].sort((a, b) =>(a - b));
      if (!matchedpairs.some(existingPair => existingPair[0] === pair[0] && existingPair[1] === pair[1])) {
        
        matchedpairs.push(pair);
      }
    }

    seen.add(current);
  });
  return matchedpairs;
}


const targetvall=findPairsWithSum(inputArray ,target2);

// console.log(targetvall)