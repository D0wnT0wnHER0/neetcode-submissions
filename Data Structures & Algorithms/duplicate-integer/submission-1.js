class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set(nums);
        if(nums.length === s.size){
            return false;
        }
        return true;
    }
}
