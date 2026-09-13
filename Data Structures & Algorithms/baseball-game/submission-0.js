class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
      let newArr = [];

    for(let val of operations){

    if(val === '+') {
        const top = newArr.pop();

        const newTop = top + newArr[newArr.length -1];

        newArr.push(top);
        newArr.push(newTop);
    } else if(val === 'D') {
            const top = newArr[newArr.length -1];

            const newTop = top *2;

            newArr.push(newTop);
        } else if(val === 'C') {
            newArr.pop();
        } else {
            newArr.push(parseInt(val));
        }
     }
     return newArr.reduce((a,b) => a + b, 0);
     }
}