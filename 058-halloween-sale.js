// How many games can you buy with budget s when the first game costs p and each subsequent game costs d less than the previous one down to a minimum price of m

// my original solution
function howManyGames(p, d, m, s) {
    let totalGames = 0;
    for (let i = 0; ; i++) {
        s -= Math.max(p - (i * d), m);
        if (s < 0) {
            return totalGames;
        }
        totalGames++;
    }
}

// another solution
// function howManyGames(p, d, m, s) {
//     let totalGames = 0;
//     while (s >= p) {
//         totalGames++;
//         s -= p;
//         p - d > m ? p -= d : p = m;
//     }
//     return totalGames;
// }