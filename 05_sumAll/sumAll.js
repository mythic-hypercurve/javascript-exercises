const sumAll = function (a, b) {
  let num = 0;

  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    console.log('error', typeof a, typeof b);
    return 'ERROR';
  } else {
    console.log(typeof a, typeof b);
    let first = Math.min(a, b);
    let last = Math.max(a, b);
    for (let i = first; i <= last; i++) {
      num = num + i;
    }
    return num;
  }
};
// Do not edit below this line
module.exports = sumAll;
