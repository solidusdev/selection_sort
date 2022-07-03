let sample_array = [44,10,63,88,3,105];

const selection_sort = arr => {

    for(let i = 0; i < arr.length; i++) {

        let current_iteration = i;

        for(let j = i + 1; j < arr.length; j++) {

            if(arr[current_iteration] > arr[j]){
                current_iteration = j;
            }
        }

        [arr[i], arr[current_iteration]] = [arr[current_iteration], arr[i]];
    }

    return arr;
};

console.log(selection_sort(sample_array));  // [ 3, 10, 44, 63, 88, 105 ]
// TIME: O(n^2)
// SPACE: O(1)

// Jest Unit Testing export function
module.exports = selection_sort;