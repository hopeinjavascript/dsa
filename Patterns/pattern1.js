/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
function pattern1(height) {
  let str = '';
  for (let i = 1; i < height; i++) {
    for (let j = 1; j <= i; j++) {
      // str += `${j} `; // change i -> j OR j -> i
      str += `* `; //'* '; // console.log() wont work as it prints every star on new line
    }
    str += '\n';
  }

  return str;
}
const result = pattern1(9);
console.log(result);
