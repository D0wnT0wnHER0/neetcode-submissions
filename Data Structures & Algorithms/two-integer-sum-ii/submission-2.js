class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = {};
        let n=numbers.length;

        for(let i=0; i<n; i++){
            let key = numbers[i];
            map[key]=i;
        }

        for(let i=0; i<n; i++){
            let curr = numbers[i];
            let nn = target - curr;
            if(map[nn] !== undefined && map[nn] !== i){
                return [i+1, map[nn]+1];
            }
        }
    }
}
