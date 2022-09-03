// longest substring without repeating characters
// SLIDING WINDOW ALGO
/*
LEGEND:
a == acquire (index) => start position = 0
r == release (index) => start position = 0

Data Structure used is "Set" as it always stores unique values

- we keep adding/acquiring values in the Set until we find unique values
- we keep removing/releasing values from the Set (from start position) until all duplicate values are removed

*/
const str = 'pwwkew';

function longestSubstring(str) {
  let a = 0,
    r = 0,
    maxSubStrLen = 0;

  const set = new Set();

  while (a < str.length) {
    if (!set.has(str[a])) {
      set.add(str[a]);
      a++;
      maxSubStrLen = Math.max(maxSubStrLen, set.size);
    } else {
      set.delete(str[r]);
      r++;
    }
  }
  return maxSubStrLen;
}

const longestSubstr = longestSubstring(str);
console.log(longestSubstr);
