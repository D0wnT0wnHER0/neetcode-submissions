class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length === 0 || s.length === 0) return "";

        let minL = Infinity;
        let result = "";

        let need = {};

        for(let c of t){
            need[c] = (need[c] || 0) + 1;
        }

        for(let i=0; i<s.length; i++){
            const window = {};
            let formed = 0;
            let required = Object.keys(need).length;

            for(let j=i; j<s.length; j++){
                let char = s[j];
                window[char] = (window[char] || 0) + 1;

                if(need[char] && window[char] === need[char]){
                    formed++;
                }

                if(formed === required){
                    let len = j-i+1;
                    if(len<minL){
                        minL=len;
                        result = s.slice(i, j+1)
                    }
                }
            }
        }

        return result;
    }
}
