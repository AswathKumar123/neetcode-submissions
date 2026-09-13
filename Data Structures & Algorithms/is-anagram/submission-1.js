class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      
     let map1 ={};
     let map2 = {};

     if(s.length !== t.length) return false;

     for(let val of s){
        map1[val] = (map1[val] || 0) +1;
     }

     for(let val of t){
        map2[val] = (map2[val] || 0) +1;
     }

     for(let key in map1){
        if(!(key in map2)){
            return false;
        }

        if(map2[key] !== map1[key]){
            return false;
        }
    }
    return true;


    }
}
