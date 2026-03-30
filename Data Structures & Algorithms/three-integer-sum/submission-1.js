class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let s = new Set();
        nums.sort((a,b) => a-b);
        let n=nums.length;
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                for(let k=j+1; k<n; k++){
                    if(nums[i]+nums[j]+nums[k] === 0){
                        s.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }
        return Array.from(s, JSON.parse)
    }
}
