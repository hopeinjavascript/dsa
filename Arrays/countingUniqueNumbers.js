const arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8];

// solution for SORTED array
function countingUniqueNumbers(arr) {
  if (!arr.length) return 'Array is empty';

  const uniqueNumbers = [];
  let countOfUniqueNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueNumbers.push(arr[i]);
      countOfUniqueNumbers++;
    }
  }

  return { uniqueNumbers, countOfUniqueNumbers };
}

const unique = countingUniqueNumbers(arr);
console.log(unique);
