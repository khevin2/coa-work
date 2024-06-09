function arrayMap(nums, target) {
    let currentSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while (currentSum > target) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

console.log(arrayMap([4, 2, 7, 1, 9, 5],  9));