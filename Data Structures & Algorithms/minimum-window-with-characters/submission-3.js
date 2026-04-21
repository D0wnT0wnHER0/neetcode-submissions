class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === "") return "";
        let map = {};
        let n = s.length;
        let m = t.length;
        let count = 0;
        let sIndex = -1;
        let minL = Infinity;
        let l=0;
        let r=0;

        for(let char of t){
            map[char] = (map[char] || 0) + 1;
        }

        while(r<n){
            let ch = s[r];

            if(map[ch] && map[ch] > 0){
                count++;
            }
            map[ch] = (map[ch] || 0) - 1;

            while(count === m){
                let len = r-l+1;
                if(len<minL){
                    minL=len;
                    sIndex = l;
                }

                map[s[l]] = (map[s[l]] || 0) + 1;

                if(map[s[l]] > 0){
                    count--;
                }
                l++;
            }
            r++;
        }

        return sIndex === -1 ? "" : s.slice(sIndex, sIndex+minL);
    }
}
