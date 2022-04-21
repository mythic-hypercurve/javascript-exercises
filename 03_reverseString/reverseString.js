const reverseString = function (string) {
  let reverseString = '';
  let splitString = string.split('');
  //   console.log(splitString);
  let reverseArray = splitString.reverse();
  //   console.log(reverseArray);
  reverseString = reverseArray.join('');
  //   console.log(reverseString);
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
