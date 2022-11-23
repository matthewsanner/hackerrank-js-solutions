// given a square map as a matrix of integer strings, for any integers not on the edges, replace the integer with 'X' if all four integers above, below, to the left, and right are lower in value than the integer

function cavityMap(grid) {
    let g = grid;
    for (let i = 1; i < g.length - 1; i++) {
        for (let j = 1; j < g[0].length - 1; j++) {
            if (g[i][j] > Math.max(g[i - 1][j], g[i + 1][j], g[i][j - 1], g[i][j + 1])) {
                let arrayRow = g[i].split('');
                arrayRow[j] = 'X';
                g[i] = arrayRow.join('');
            }
        }
    }
    return g;
}