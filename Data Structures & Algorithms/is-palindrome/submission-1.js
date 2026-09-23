class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       let left = 0;
       let right = s.length -1;

       while(left <= right){
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();

        if(!this.isAlphaNumeric(leftChar)){
            left++;
        } else if(!this.isAlphaNumeric(rightChar)){
            right--;
        } else if(leftChar !== rightChar){
            return false;
        } else {
            left++;
            right--;
        }
       }
       return true;
    }

    isAlphaNumeric(s) {
        return /^[0-9a-zA-Z]$/.test(s);
    }
}
