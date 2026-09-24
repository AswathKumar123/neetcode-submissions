class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start =0;
        let end = nums.length -1;

        while(start < end){
            const mid = Math.floor((start+end)/2);

            if(nums[mid] > nums[end]){
                start = mid +1;
            } else {
                end = mid;
            }
        }

        let smallIndex = start;

        const result = this.binarySearch(nums, target, 0 , smallIndex -1);

        if(result !== -1){
            return result;
        }

        return this.binarySearch(nums, target, smallIndex, nums.length-1);

    }

    binarySearch(nums, target, start, end){
        while(start <=end){
            const mid = Math.floor((start+end)/2);

            if(target === nums[mid]){
                return mid;
            } else if(target > nums[mid]){
                start = mid +1;
            } else {
                end = mid-1;
            }
        }
        return -1;
    }
}
