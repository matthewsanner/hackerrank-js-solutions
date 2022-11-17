// Given a number, n, of cities in a straight line, and an array, c, of the locations of cities with space stations- determines the the maximum distance from any city to the nearest space station.

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);
    let maxBnStations = 0;
    for (let s = 0; s < c.length - 1; s++) {
        let dist = Math.abs(c[s] - c[s + 1]);
        if (dist > maxBnStations) maxBnStations = dist;
    }
    let maxDistFromStat = Math.floor(maxBnStations / 2);
    //cities at beginning
    if (c[0] - 0 > maxDistFromStat) maxDistFromStat = c[0];
    //cities at end
    if ((n - 1) - c[c.length - 1] > maxDistFromStat) maxDistFromStat = (n - 1) - c[c.length - 1];
    return maxDistFromStat;
}

// cute n' easy solution
// function flatlandSpaceStations(n, c) {
//     let max = [];
//     for (let city = 0; city < n; city++) {
//         max.push(Math.min(...(c.map(citySpace => Math.abs(city - citySpace)))))
//     }
//     return Math.max(...max)
// }