function numOfOccurrences(numArr) {
  if (numArr.length === 0) {
    return "array is empty";
  }

  const numObj = {};
  for (let num of numArr) {
    if (num >= 0) {
      if (num in numObj) {
        //console.log('if')
        numObj[num] = ++numObj[num];
      } else {
        //console.log('else')
        numObj[num] = 1;
      }
    }
  }
  // console.log(numObj);
  if (Object.keys(numObj).length === 0) return "No +ve numbers";
  return maxNumOfOccurrences(numObj);
}
function maxNumOfOccurrences(numObj) {
  let max = 0,
    // num = 0,
    key = "";
  for (let numKey in numObj) {
    let num = numObj[numKey];
    // key = numKey;
    if (num > max) {
      max = num;
      key = numKey;
    }
  }
  return `MAX occurrences is ${max} of number ${key}`;
}

const numArr = [
  1, 1, 2, 3, 3, 3, 4, 2, 5, 6, 6, 7, 8, 8, 8, 8, 2, 3, 2, 5, 5, 5, 5, 5, 5, 8,
  8, 9, 9, 9, 5, 5,
];
// console.log(numArr);
const output = numOfOccurrences(numArr);
console.log(output);
