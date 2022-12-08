// Determines the state of a grid of bombs at a particular instant, n in seconds, given an initial grid of bombs at n=0 that stays the same at n=1. Cells in the grid are either a bomb or they are empty. Bombs explode after three seconds. Bomberman places bombs in all empty spaces at every even number n.
function bomberMan(n, grid) {
    // if n is 1 the grid is same as initially given grid
    if (n == 1) return grid;
    // if n is an even number, returns full grid of bombs
    if (n % 2 == 0) return grid.map(row => row.replace(/./g, 'O'));

    // if n meets the following condition, returns grid after one explosion
    // if n does not meet following condition or those above, returns grid after two explosions
    // there are no other possible outcomes as the following two outcomes will repeat one after the other
    return (n + 1) % 4 == 0 ? gridAfterExplosion(grid) : gridAfterExplosion(gridAfterExplosion(grid));
}

function gridAfterExplosion(grid) {
    let initialBombSpots = [];
    //records indices where bombs exist initially
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row].charAt(col) == 'O') {
                initialBombSpots.push([row, col]);
            }
        }
    }

    // initial bomb spots will be detonated and empty at the end
    let finalDetonatedSpots = initialBombSpots;

    // if they exist, cells neighboring a bomb are detonated and empty
    // cell[0] is row index, cell[1] is column index
    initialBombSpots.forEach(cell => {
        if (cell[0] - 1 >= 0) {
            detonatedSpots.push([cell[0] - 1, cell[1]]);
        }
        if (cell[0] + 1 < grid.length) {
            detonatedSpots.push([cell[0] + 1, cell[1]]);
        }
        if (cell[1] - 1 >= 0) {
            detonatedSpots.push([cell[0], cell[1] - 1]);
        }
        if (cell[1] + 1 < grid[0].length) {
            detonatedSpots.push([cell[0], cell[1] + 1]);
        }
    })

    // creates grid full of just bombs
    let fullGrid = grid.map(row => row.replace(/./g, 'O'));
    // starting with full bomb grid, replaces spots which are to be detonated/empty with '.'
    detonatedSpots.forEach(([row, col]) => {
        fullGrid[row] = fullGrid[row].substring(0, col) + '.' + fullGrid[row].substring(col + 1);
    })

    // full grid is now final grid with detonated spots and remaining bombs
    let finalGrid = fullGrid;
    return finalGrid;
}