class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let ss = s.split('').sort().join('');
        let tt = t.split('').sort().join('');

        return ss===tt;
    }
}
