const numbers = [2, 9, 3, 5, 7, 8, 1];
const targetSum = 6;
const result = findPairs(numbers, targetSum);
console.log(result);

function findPairs(arr, total) {
  let result = [];
  let diffvalue = new Set()
  for (let i = 0; i < arr.length; i++) {
    let istvalue = arr[i];

    for (let i = 0; i < arr.length; i++) {
      let sndvalue = arr[i];

      let finalvalue = sndvalue + istvalue;

      total == finalvalue ? result.push([istvalue, sndvalue]) : null;
    }
  }

  return result;
}



// function findPairs(arr, total) {
//   let result = [];
//   let seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//       let el = arr[i];
//       let complement = total - el;

//       if (seen.has(complement)) {
//           result.push([complement, el]);
//       }
//       seen.add(el);
//   }

//   return result;
// }