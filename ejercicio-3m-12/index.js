let nums = [3, 2, 4, 1];
let maxSum = -Infinity;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        console.log(`${nums[i]} + ${nums[j]} = ${sum}`);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
}

alert("El mayor es " + maxSum);
