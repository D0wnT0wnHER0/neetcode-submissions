class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length;
        let l = 0;
        let r = 0;
        let res = 0;
        let set = new Set();

        while (r<n){
            if(set.has(s[r])){
                set.delete(s[l]);
                l++;
            } else {
                set.add(s[r]);
                r++;
                res = Math.max(res, set.size);
            }

        }
        return res;
    }
}
