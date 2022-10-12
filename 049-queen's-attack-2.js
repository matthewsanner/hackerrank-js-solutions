//determine the amount of spaces a queen can attack on a chessboard of size n x n, given a specific location of the queen, and also the locations of a number of obstacles that potentially block the queen's path

function queensAttack(n, k, r_q, c_q, obstacles) {
    let top = n - r_q;
    let bot = r_q - 1;
    let right = n - c_q;
    let left = c_q - 1;
    let topLeft = Math.min(top, left);
    let topRight = Math.min(top, right);
    let botLeft = Math.min(bot, left);
    let botRight = Math.min(bot, right);
    if (k = 0) return top + bot + right + left + topLeft + topRight + botLeft + botRight;
    obstacles.forEach(ob => {
        //horizontal
        if (ob[0] == r_q) {
            if (ob[1] > c_q) {
                right = Math.min(right, ob[1] - c_q - 1);
            } else {
                left = Math.min(left, c_q - ob[1] - 1);
            }
        }
        //vertical
        else if (ob[1] == c_q) {
            if (ob[0] > r_q) {
                top = Math.min(top, ob[0] - r_q - 1);
            } else {
                bot = Math.min(bot, r_q - ob[0] - 1);
            }
        }
        //diagonals
        else if (Math.abs(ob[0] - r_q) == Math.abs(ob[1] - c_q)) {
            // top right
            if (ob[0] > r_q && ob[1] > c_q) {
                topRight = Math.min(topRight, ob[1] - c_q - 1);
            }
            // bottom right
            else if (ob[0] < r_q && ob[1] > c_q) {
                botRight = Math.min(botRight, ob[1] - c_q - 1);
            }
            // top left
            else if (ob[0] > r_q && ob[1] < c_q) {
                topLeft = Math.min(topLeft, c_q - ob[1] - 1);
            }
            // bottom left
            else if (ob[0] < r_q && ob[1] < c_q) {
                botLeft = Math.min(botLeft, c_q - ob[1] - 1);
            }
        }
    })
    return top + bot + right + left + topLeft + topRight + botLeft + botRight;
}