function SumFirstAndLastArrayElements(nums) {
    let sum=0;
    let a=nums[0];
    let b=nums[nums.length-1];
    sum=a+b;
    console.log(sum);
}

SumFirstAndLastArrayElements([20, 30, 40])