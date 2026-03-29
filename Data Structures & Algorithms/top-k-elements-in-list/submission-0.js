class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for(let i=0; i<nums.length; i++){
            if(!map[nums[i]]){
                map[nums[i]] = 0;
            }
            map[nums[i]]++;
        }

        let sorted = Object.entries(map).sort((a,b) => b[1] - a[1]);
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(sorted[i][0]));
        }

        return result;
    }
}
