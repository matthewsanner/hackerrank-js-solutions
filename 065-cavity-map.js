// given a square map as a matrix of integer strings, for any integers not on the edges, replace the integer with 'X' if all four integers above, below, to the left, and right are lower in value than the integer

function cavityMap(grid) {
    let n = grid.length;
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            if (grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i][j - 1] && grid[i][j] > grid[i][j + 1]) {
                let array = grid[i].split('');
                array[j] = 'X';
                grid[i] = array.join('');
            }
        }
    }
    return grid;
}