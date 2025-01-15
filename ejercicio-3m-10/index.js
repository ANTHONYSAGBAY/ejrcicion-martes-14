'use strict'

let nums = [5, 10, 7, 15, 12];
let maxi = nums[0];

for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxi) {
        maxi = nums[i];
    }
}

alert(maxi);
