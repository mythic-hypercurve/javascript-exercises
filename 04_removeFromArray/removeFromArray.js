const removeFromArray = function (...args) {
  // Pull out the Array using index.
  let src = args[0];
  let itemsToRemove = args.slice(1);
  console.log({ array: src });

  // Create a new empty array
  let newArray = [];

  // Use forEach to go through the array
  src.forEach(arrayChecker);

  // Push every element into the new array
  // UNLESS it is included in the function arguments
  // Create a new array with every item, except those that should be removed

  function arrayChecker(item) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
      console.log({ item });
    }
    // and return that array
  }
  return newArray;
  //   return src
  //     .filter(item => !itemsToRemove.includes(item))
  //     .map(item => 'Item ' + item);
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1, 2, 3], 2));
