// Determines if an array of numbers can be sorted by a single action of either swapping two values or reversing the order of one substring, and if so, it reveals which indices to swap or the first and last indices of a substring to reverse. If both options work it defaults to the swap.

function almostSorted(arr) {
    // out of place indices
    let oopIndices = [];
    // initial array sorted
    let sorted = [...arr].sort((a, b) => a - b);
    // if value is not in it's correct sorted spot then record the index
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != sorted[i]) {
            oopIndices.push(i);
        }
    }
    // if there are no out of place indices, return yes (it's already in order)
    if (!oopIndices.length) {
        console.log('yes');
        // if there are only two out of place indices then they can be put in order with a single swap
    } else if (oopIndices.length == 2) {
        console.log('yes');
        console.log('swap', oopIndices[0] + 1, oopIndices[1] + 1);
    } else {
        let a = oopIndices[0], b = oopIndices[oopIndices.length - 1];
        // iterating through the out of place indices in ascending order
        // determines if it is not possible to reverse a substring to put everything in order
        for (let i = a; i <= b; i++) {
            if (arr[i] !== sorted[b - i + a]) {
                return console.log('no');
            }
        }
        // only one more option which is that you can reverse the out of order values with a substring reversal
        console.log('yes');
        console.log('reverse', a + 1, b + 1);
    }
}