class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let res = 0;
        let lmax = new Array(n).fill(0);
        let rmax = new Array(n).fill(0);

        lmax[0] = height[0];
        for(let i=1; i<n; i++){
            lmax[i] = Math.max(lmax[i-1], height[i]);
        }

        rmax[n-1] = height[n-1];
        for(let i=n-2; i>=0; i--){
            rmax[i] = Math.max(rmax[i+1], height[i]);
        } 

        for(let i=0; i<n; i++){
            res += Math.min(lmax[i], rmax[i]) - height[i];
        }

        return res;
    }
}
