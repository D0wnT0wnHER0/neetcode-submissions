class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let maxP = 0;

        for(let i=0; i<prices.length; i++){
            maxP = Math.max(maxP, prices[i] - min);
            min = Math.min(min, prices[i]);
        }

        return maxP;
    }
}
