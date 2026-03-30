class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let s = new Set();
        let n = nums.length;
        for(let i=0; i<n; i++){
            let ts = new Set();
            for(let j=i+1; j<n; j++){
                const t = -(nums[i] + nums[j])
                if (ts.has(t)){
                    const ans = [nums[i], nums[j], t].sort((a,b) => a-b);
                    s.add(JSON.stringify(ans));
                }
                ts.add(nums[j]);
            }
        }
        return Array.from(s, JSON.parse);
    }
}
