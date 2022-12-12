// Given a grid of cells of value good(G) or bad(B), determines largest possible product between the area of two 'plus signs' solely made of good cells found in the grid.

function twoPluses(grid) {
    const numCols = grid[0].length;
    const numRows = grid.length;
    // array to hold pluses in arrays of this format [area, row, col]
    let pluses = [];
    // iterate through and find possible pluses starting from a center 'G' cell
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] == 'G') {
                // "pluses" the size of one cell count so include those
                pluses.push([1, row, col]);
                // find maximum possible length of segments from center, regardless of good/bad
                let maxSegLength = Math.min(row, numRows - row - 1, col, numCols - col - 1);
                let segLength = 1;
                while (segLength <= maxSegLength) {
                    // if plus with segment length segLength contains only good cells, add to array and keep checking for larger ones up to max
                    if (isPlus(grid, row, col, segLength)) {
                        pluses.push([1 + segLength * 4, row, col]);
                        segLength++;
                    } else break;
                }
            }
        }
    }
    // iterate through pluses and if they don't overlap keep maximum product of two pluses
    let maxProduct = 0;
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i + 1; j < pluses.length; j++) {
            if (!isOverlap(pluses[i], pluses[j])) {
                maxProduct = Math.max(maxProduct, pluses[i][0] * pluses[j][0]);
            }
        }
    }
    return maxProduct;

    // return true if it's a valid plus
    function isPlus(grid, row, col, segLength) {
        return (
            grid[row - segLength][col] == 'G' &&
            grid[row + segLength][col] == 'G' &&
            grid[row][col - segLength] == 'G' &&
            grid[row][col + segLength] == 'G'
        );
    }
    // return true if two pluses overlap, otherwise false
    function isOverlap(p1, p2) {
        // two pluses with area 1 can't overlap
        if (p1[0] == 1 && p2[0] == 1) return false;
        let rowDiff = Math.abs(p1[1] - p2[1]);
        let colDiff = Math.abs(p1[2] - p2[2]);
        // represents length from center cell to end of any segment, including center cell
        let l1 = Math.ceil(p1[0] / 4);
        let l2 = Math.ceil(p2[0] / 4);
        // conditions for overlap
        if (!rowDiff && l1 + l2 > colDiff + 1) return true;
        if (!colDiff && l1 + l2 > rowDiff + 1) return true;
        if (Math.min(l1, l2) > rowDiff && Math.max(l1, l2) > colDiff) return true;
        if (Math.min(l1, l2) > colDiff && Math.max(l1, l2) > rowDiff) return true;
        return false;
    }
}