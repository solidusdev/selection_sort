const selection_sort = require("./selection_sort");

test("array as arguement to be sorted", () => {
    const array_sample = [4,32,1];  // Unsorted
    expect(selection_sort(array_sample)).toEqual([1,4,32]);
});