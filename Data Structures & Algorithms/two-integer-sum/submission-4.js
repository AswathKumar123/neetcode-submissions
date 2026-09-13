class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    
    let left =0;
    let right = nums.length -1;

    let arr  = nums.map((val, indx) => [val, indx])

    arr.sort((a,b) => a[0] - b[0]);

    while(left < right){
        let sum = arr[left][0] + arr[right][0];
        if(sum === target){
            return [arr[left][1], arr[right][1]];
        } else if(sum > target){
            right--;
        } else {
            left++;
        }
    }

    }
}
