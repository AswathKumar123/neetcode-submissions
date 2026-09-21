class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let res ={};

      for(let s of strs){
        const sortedArr = s.split('').sort().join('');

        if(!res[sortedArr]){
            res[sortedArr] = [];
        }

        res[sortedArr].push(s);
      }

      return Object.values(res);
}
}
