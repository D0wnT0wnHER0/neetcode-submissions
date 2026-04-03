class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let res = 0;

        for(let i=0; i<n; i++){
            let lmax = height[i];
            let rmax = height[i];

            for(let j=0; j<i; j++){
                lmax = Math.max(lmax, height[j]);
            }

            for(let j=i+1; j<n; j++){
                rmax = Math.max(rmax, height[j]);
            }

            res += Math.min(lmax, rmax) - height[i];
        }
        return res;
    }
}
