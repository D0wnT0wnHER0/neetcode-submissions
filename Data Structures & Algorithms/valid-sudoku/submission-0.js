class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let r = Array.from({length:9}, () => new Set());
        let c = Array.from({length:9}, () => new Set());
        let box = Array.from({length:9}, () => new Set());

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let num = board[i][j];
                if(num === "."){
                    continue;
                }
                const bi = Math.floor(i/3)*3 + Math.floor(j/3);
                if(r[i].has(num) || c[j].has(num) || box[bi].has(num)){
                    return false;
                }
                r[i].add(num);
                c[j].add(num);
                box[bi].add(num);
            }
        }

        return true;
    }
}
