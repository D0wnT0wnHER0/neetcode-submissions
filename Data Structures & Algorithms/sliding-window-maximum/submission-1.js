class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let n = nums.length;
        let q = [];
        let res = [];
        let l = 0;
        let r = 0;

        while(r<n){
            while(q.length && nums[q[q.length-1]] < nums[r]){
                q.pop();
            }

            q.push(r);

            if(q[0] < l){
                q.shift();
            }

            if(r-l+1 === k){ // same as r-l+1
                res.push(nums[q[0]]);
                l++;
            }

            r++
        }
        return res;
    }
}
