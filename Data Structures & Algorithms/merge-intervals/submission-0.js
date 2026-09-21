class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {

        intervals.sort((a,b) => {
            if(a[0] < b[0]){
                return -1;
            } else if(a[0] > b[0]){
                return 1;
            } else {
                return a[1] - b[1];
            }
        });

        let res = [];

        res.push(intervals[0]);

        for(let i=1; i< intervals.length; i++){
            let currIntr = intervals[i];
            let lastIntr = res[res.length -1];

            if(currIntr[0] <= lastIntr[1]){
                let newIntr = [Math.min(currIntr[0], lastIntr[0]), Math.max(currIntr[1], lastIntr[1])];

                res.pop();
                res.push(newIntr);
            } else {
                res.push(currIntr);
            }
        }

        return res;


    }
}
