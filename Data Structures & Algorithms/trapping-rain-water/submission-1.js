class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let l = 0;
        let r = n-1;
        let lmax = height[l];
        let rmax = height[n-1];
        let res = 0;

        while(l<r){
            if(lmax < rmax){
                l++;
                lmax = Math.max(lmax, height[l]);
                res += lmax - height[l];
            } else {
                r--;
                rmax = Math.max(rmax, height[r]);
                res += rmax - height[r];
            }
        }

        return res;
    }
}
