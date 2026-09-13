class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {

    let map = {0:1};
    let count=0;
    let prefix = 0;

    for(let val of nums){
        prefix += val;

    if(map[prefix -k]){
        count += map[prefix -k];
    }

    map[prefix] = (map[prefix] || 0) +1;


}
return count;

}
}
