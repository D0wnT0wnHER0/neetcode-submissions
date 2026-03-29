class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let arr = new Array(n);
        let pref = new Array(n);
        let suff = new Array(n);

        pref[0] = 1;
        suff[n-1] = 1;

        for(let i=1; i<n; i++){
            pref[i] = pref[i-1] * nums[i-1];
        }

        for(let i=n-2; i>=0; i--){
            suff[i] = suff[i+1] * nums[i+1];
        }

        for(let i=0; i<n; i++){
            arr[i] = pref[i] * suff[i];
        }

        return arr;

    }
}
