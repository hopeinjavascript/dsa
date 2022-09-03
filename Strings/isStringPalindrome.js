const str = 'malaalamm';

function isStringPalindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    // console.log(left, right);
    // console.log(str[left], str[right]);

    if (str[left] !== str[right]) return false;

    left = left + 1;
    right = right - 1;
  }

  return true;
}

const isPalindrome = isStringPalindrome(str);
console.log(isPalindrome);
