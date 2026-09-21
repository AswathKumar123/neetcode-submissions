class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {

        let map = new Map();

           nums1.forEach((num, i) => map.set(num, i));

        const res = new Array(nums1.length).fill(-1);

        for(let i =0; i< nums2.length; i++){
            if(!map.has(nums2[i])){
                continue;
            }

            for(let j= i+1; j < nums2.length; j++){
                if(nums2[j] > nums2[i]){
                    const idx = map.get(nums2[i]);
                    res[idx] = nums2[j];
                    break;
                }
            }
        }

        return res;
    }
}
