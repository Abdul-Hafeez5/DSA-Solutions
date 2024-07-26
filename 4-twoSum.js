// Two Sum
// Given an array of integers and an target number
// return indices of two numbers such that they add upto target

// input => nums = [2,7,11,13,18], target = 15 => here indices were 0 and 3 to get 15 so output will [0,3]

const twoSum = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) return [i, j];
    }
  }
};

console.log(twoSum([2, 7, 11, 13, 18], 15));