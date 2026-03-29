class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let seen = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];

            if (num === ".") continue;

            let rowKey = `r${i}-${num}`;
            let colKey = `c${j}-${num}`;
            let boxKey = `b${Math.floor(i / 3) * 3 + Math.floor(j / 3)}-${num}`;

            if (
                seen.has(rowKey) ||
                seen.has(colKey) ||
                seen.has(boxKey)
            ) {
                return false;
            }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }

    return true;
}
}
