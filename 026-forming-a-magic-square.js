//determines the minimum amount that you have to change individual digits in a 3x3 square matrix in order to turn it into a magic square

function formingMagicSquare(s) {
    //was necessary to come up with all possible magic squares to iterate over
    const possMagicSquares = [
     [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
     [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
     [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
     [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
     [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
     [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
     [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
     [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
 ]
 
 let lowestCost = Number.MAX_SAFE_INTEGER;
 
 for (let k = 0; k < 8; k++) { 
     let totalDiff = 0;
     for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
             totalDiff += Math.abs(s[i][j] - possMagicSquares[k][i][j]);
         }
     }
     if (totalDiff < lowestCost) { 
         lowestCost = totalDiff;
     }
 }
 return lowestCost;
 }