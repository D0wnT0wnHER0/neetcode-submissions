class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for(let i=0; i<nums.length; i++){
            let key = nums[i];
            if(map[key]){
                map[key]++
            } else {
                map[key]=1;
            }
        }
        let sort = Object.entries(map).sort((a,b) => b[1] - a[1]);

        let res = [];
        for(let i=0; i<k; i++){
            res.push(Number(sort[i][0]));
        }
        return res;
    }
}
