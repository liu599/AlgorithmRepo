/**
 * Two Sum: https://leetcode.com/problems/two-sum/description/
 * No.01
 * Level: Easy
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

(() => {
  let twoSum = (nums, target) => {
    let numLen = nums.length;
    let ret = [];
    for (let i = 0; i < numLen; i += 1) {
      let tmp = nums[i];
      for (let j = i + 1; j < numLen; j += 1) {
        if (tmp + nums[j] === target) {
          ret.push(i);
          ret.push(j);
          return ret;
        }
      }
    }
  };
  let retx = twoSum([3, 2, 4], 6);
  console.log(retx);
})();
