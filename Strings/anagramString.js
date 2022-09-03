const str1 = 'hello';
const str2 = 'llheo';

/*
Time Complexity - O(n)
condition-
1. length should be same of both the strings
2. the hash should contain all zero values against each letter
    1st loop on str1 - { h: 1, e: 1, l: 2, o: 1 }
    2nd loop on str2 - { h: 0, e: 0, l: 0, o: 0 }
*/

function anagramString(str1, str2) {
  if (!str1 || !str2) return false;

  if (str1.length !== str2.length) return false;

  const strHash1 = {};
  for (const char of str1) {
    strHash1[char] = strHash1[char] + 1 || 1;
  }

  for (const char of str2) {
    //checking for zero ("falsy" value)
    if (!strHash1[char]) return false;

    strHash1[char] = strHash1[char] - 1;
  }
  return true;
}

const isAnagram = anagramString(str1, str2);
console.log(isAnagram);
