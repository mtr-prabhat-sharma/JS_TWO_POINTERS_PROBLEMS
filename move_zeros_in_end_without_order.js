let nums = [1,4,0,0,3,2,0];
function moveZeros(nums){
    let i = 0;
    let j = nums.length - 1;
    while(i < j){
        if(nums[i] !== 0){
            i++;
        }else if(nums[j] === 0){
            j--;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    return nums;
}
console.log(moveZeros(nums))
