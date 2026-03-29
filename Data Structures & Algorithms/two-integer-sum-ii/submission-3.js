class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map();
        let n=numbers.length;

        for(let i=0; i<n; i++){
            let temp = target - numbers[i];
            if(map.has(temp)){
                return [map.get(temp), i+1];
            }

            map.set(numbers[i], i+1);
        }
        return[];
    }
}
