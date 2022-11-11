// Determines how many chocolate bars one can eat given and initial amount of money, n, and a cost of bars, c. Then a special promotion is available such that for every m wrappers you return you can get another chocolate bar.

function chocolateFeast(n, c, m) {
    let barsEaten = Math.floor(n / c);
    let wrappers = barsEaten;
    while (wrappers >= m) {
        barsEaten += Math.floor(wrappers / m);
        wrappers = wrappers % m + Math.floor(wrappers / m);
    }
    return barsEaten;
}

// mathy one-liner

// function chocolateFeast(n, c, m) {
//     return Math.floor(n / c) + Math.ceil(Math.floor(n / c) / (m - 1) - 1);
// }