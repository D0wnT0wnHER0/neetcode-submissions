class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
     alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    isPalindrome(s) {
        let ns = '';
        for(let p of s){
            if(this.alphaNum(p)){
                ns += p.toLowerCase();
            }
        }
        
        return ns === ns.split('').reverse().join('');
    }
}
