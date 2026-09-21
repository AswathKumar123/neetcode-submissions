class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
     let st = [];

     for(let bracket of s){
        if(bracket === '(' || bracket === '[' || bracket === '{'){
            st.push(bracket);
        } else if(st.length ===0) {
            return false;
        } else {
            let lch = st[st.length -1];

            if((lch === '(' && bracket === ')') || (lch === '[' && bracket === ']') || (lch === '{' && bracket === '}')){
                st.pop();
            } else {
                return false;
            }
        }
     }

     if(st.length ===0) { return true; } else { return false; }
    }
}