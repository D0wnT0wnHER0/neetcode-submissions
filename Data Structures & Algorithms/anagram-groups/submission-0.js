class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let s1={};
        for(let i=0; i<strs.length; i++){
           let key =  strs[i].split('').sort().join('');

           if(!s1[key]){
            s1[key]=[];
           }

           s1[key].push(strs[i]);
        }
        return Object.values(s1);
    }
}
