class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let arr = new Array(n);

        for(let i=0; i<n; i++){
            let prod = 1;
            for(let j=0; j<n; j++){
                if(i!==j){
                    prod *= nums[j];
                }
            }
            arr[i] = prod;
        }
        return arr;
    }
}
