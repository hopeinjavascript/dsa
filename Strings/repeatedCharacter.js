const str = '123a5s423ss354sddDFMlmfddfffdfknskeFFFfffaaaass';

// time complexity -> O(n)
function repeatedCharacters(str) {
  const charHash = {};
  let maxCount = 1,
    maxChar = null;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // ONLY CHARACTERS
    if (!/[a-zA-Z]/.test(char)) continue;

    charHash[char] = charHash[char] + 1 || 1;

    // checking for count in the same iteration
    if (maxCount < charHash[char]) {
      maxCount = charHash[char];
      maxChar = char;
    }
  }
  return { maxCount, maxChar };
}

const repeatedChar = repeatedCharacters(str);
console.log(repeatedChar);
