class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let rowSet = new Array(9);
        let colnSet = new Array(9);
        let gridSet = new Array(9);

        for(let i=0; i< 9; i++){
            rowSet[i] = new Set();
            colnSet[i] = new Set();
            gridSet[i] = new Set();
        }

        for(let i=0; i< 9; i++){
            for(let j=0; j<9; j++){
                let value = board[i][j];

                if(value === '.') {
                    continue;
                }

                let gridNo = Math.floor(i/3) * 3 + Math.floor(j/3);
                let isPresentInRow = rowSet[i].has(value);
                let isPresentInColn = colnSet[j].has(value);
                let isPresentInGrid = gridSet[gridNo].has(value);

                if(isPresentInRow || isPresentInColn || isPresentInGrid){
                    return false;
                }

                rowSet[i].add(value);
                colnSet[j].add(value);
                gridSet[gridNo].add(value);
            }
        }

        return true;
    }
}
