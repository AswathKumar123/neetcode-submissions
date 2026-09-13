class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let start =0;
        let seen = {};

        let maxLen = 0;

        for(let end = 0; end < s.length; end ++){
            let char = s[end];

            if(seen[char] !== undefined && seen[char] >= start){
                start = seen[char] + 1;
            }

            seen[char] = end; 
            maxLen = Math.max(maxLen, end - start +1);
        }
         return maxLen;
        
    }

}
