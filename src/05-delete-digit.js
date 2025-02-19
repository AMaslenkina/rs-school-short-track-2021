/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString().split('');
  let min = a[0];
  for (let i = 0; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
    }
  }
  a.splice(a.indexOf(min), 1);
  return +a.join('');
}

module.exports = deleteDigit;
