const arr = [-5, 4, -3, -2, 0, 2, -4, 6, 8];

// Time Complexity - O(n^2) == O(n2) == quadratic
function sumZero(arr) {
  if (!arr.length) return 'Array is empty!';

  let numOfIterations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      numOfIterations += 1;
      if (arr[i] + arr[j] == 0) {
        return { indexes: [i, j], values: [arr[i], arr[j]], numOfIterations };
      }
    }
  }

  return [-1, -1];
}

const nums = sumZero(arr);
// console.log(nums);

// Optimized solution
// Time Complexity - O(n) == linear
function sumZeroOptimized(arr) {
  if (!arr.length) return 'Array is empty!';

  let numOfIterations = 0,
    left = 0,
    right = arr.length - 1;

  while (left < right) {
    numOfIterations++;
    const SUM = arr[left] + arr[right];
    if (SUM == 0) {
      return {
        indexes: [left, right],
        values: [arr[left], arr[right]],
        numOfIterations,
      };
    } else if (SUM > 0) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

const nums1 = sumZeroOptimized(arr);
// console.log(nums1);

// callback pattern
function main(arr, callback) {
  if (!arr.length) return 'Array is empty!';

  let numOfIterations = 0;
  return callback(arr, numOfIterations);
}

function logic1(arr, numOfIterations) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      numOfIterations += 1;
      if (arr[i] + arr[j] == 0) {
        return { indexes: [i, j], values: [arr[i], arr[j]], numOfIterations };
      }
    }
  }
  return [-1, -1];
}

function logic2(arr, numOfIterations) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    numOfIterations++;
    const SUM = arr[left] + arr[right];
    if (SUM == 0) {
      return {
        indexes: [left, right],
        values: [arr[left], arr[right]],
        numOfIterations,
      };
    } else if (SUM > 0) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}

const ans1 = main(arr, logic1);
console.log(ans1);
const ans2 = main(arr, logic2);
console.log(ans2);
