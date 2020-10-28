const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}\n`);
  } else {
    console.log(`🟥 Assertion Failed: ${actual} !== ${expected}\n`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  //check if lengths are the same, if not no need to check further
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //assume elements are equal
  let areEqual = true;
  //loop through both arrays at the same time
  //used first array length because they are equal, so it doesn't matter
  for (let i = 0; i < arrayOne.length; i++) {
    //if elements are different, areEqual changes to false
    if (arrayOne[i] !== arrayTwo[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);