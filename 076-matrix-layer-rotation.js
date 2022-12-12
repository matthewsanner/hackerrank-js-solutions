// Determines the final state of a matrix after rotating it counter clockwise r times. Matrix can contain multiple 'rings', but the minumum of the length or width must be an even number such that there are never any single pieces in the middle that do not move.

function matrixRotation(matrix, r) {
    let numRows = matrix.length, numCols = matrix[0].length;
    for (let row = 0; row < numRows; row++) {
        let newLine = '';
        for (let col = 0; col < numCols; col++) {
            // current layer
            let layer = Math.min(Math.min(row, col), Math.min(numRows - row - 1, numCols - col - 1));
            // net rotation shifts, eliminating full rotations from count
            let shifts = r % (2 * (numRows + numCols - (4 * layer) - 2));
            let x = row, y = col;
            while (shifts != 0) {
                // top-left to one before top-right
                if (x == layer && y != numCols - layer - 1) {
                    let inc = Math.min(shifts, numCols - layer - y - 1)
                    y += inc
                    shifts -= inc
                    // top-right to one before bottom-right
                } else if (y == numCols - layer - 1 && x != numRows - layer - 1) {
                    let inc = Math.min(shifts, numRows - layer - x - 1)
                    x += inc
                    shifts -= inc
                    // bottom-right to one before bottom-left
                } else if (x == numRows - layer - 1 && y != layer) {
                    let inc = Math.min(shifts, y - layer)
                    y -= inc
                    shifts -= inc
                    // bottom-left to one before top-left
                } else {
                    let inc = Math.min(shifts, x - layer)
                    x -= inc
                    shifts -= inc
                }
            }
            newLine += matrix[x][y] + ' ';
        }
        console.log(newLine.trimEnd())
    }
}