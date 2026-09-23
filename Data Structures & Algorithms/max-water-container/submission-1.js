class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let left =0;
        let right = n-1;
        let ans =0;

        while(left < right){
            let heightOfContainer = Math.min(heights[left], heights[right]);

            let widthOfContainer = right - left;

            let area = widthOfContainer * heightOfContainer;

            ans = Math.max(ans, area);

            if(heights[left] < heights[right]){
                left++;
            } else {
                right--;
            }
        }
          return ans;
       
    }
}
