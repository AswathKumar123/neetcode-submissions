class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSortHelper(nums, 0, nums.length-1);
        return nums;  
    }

     mergeSortHelper(arr, start, end){
        let i= start, j = end;

        if(i < j){
           let mid = Math.floor((start+end)/2);
           this.mergeSortHelper(arr, start, mid);
           this.mergeSortHelper(arr, mid+1, end);
           this.merge(arr, start, mid, end);
        }
    } 

       merge(arr, start, mid, end){
        let res = [];
        let i = start, j = mid+1;

        while(i<=mid && j <=end){
            if(arr[i] <= arr[j]){
                res.push(arr[i]);
                i++;
            } else {
                res.push(arr[j]);
                j++;
            }
        }

        while(i <= mid){
            res.push(arr[i]);
            i++;
        }

        while(j <= end){
            res.push(arr[j]);
            j++;
        }

        for(let i=0; i< res.length; i++){
            arr[start+i] = res[i];
        }
       }
}
