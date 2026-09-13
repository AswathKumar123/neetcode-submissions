class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left =0;
        let right = numbers.length -1;

        numbers.sort((a,b) => a-b);

        while(left < right){
            let sum = numbers[left] + numbers[right];

            if(sum === target){
             return [left +1,right +1];
            } else if(sum > target){
                right--;
            } else {
                left++;
            }
        }
    }
}
