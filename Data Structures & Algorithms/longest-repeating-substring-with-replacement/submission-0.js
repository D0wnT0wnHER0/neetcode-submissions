class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;

        for(let i=0; i<s.length; i++){
            let map = new Map();
            let mq = 0;
            for(let j=i; j<s.length; j++){
                map.set(s[j], (map.get(s[j]) || 0) + 1);
                mq = Math.max(mq, map.get(s[j]));
                if(j-i+1-mq <= k){
                    res = Math.max(res, j-i+1);
                }
            }
        }

        return res;
    }
}
