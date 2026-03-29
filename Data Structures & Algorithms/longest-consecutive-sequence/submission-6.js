class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const s = new Set(nums);

        for(let n of nums){
            let streak = 0;
            let i = n;
            while(s.has(i)){
                streak++;
                i++;
            } 
            res = Math.max(res, streak);
        }
        return res;
    }
}
