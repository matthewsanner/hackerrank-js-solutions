// Given a number, n, of cities in a straight line, and an array, c, of the locations of cities with space stations- determines the the maximum distance from any city to the nearest space station.

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => b - a);
    let maxBnStations = 0;
    for (let i = 0; i < c.length - 1; i++) {
        let dist = c[i] - c[i + 1];
        if (dist > maxBnStations) maxBnStations = dist;
    }
    let maxDistFromStat = Math.floor(maxBnStations / 2);
    if (c[c.length - 1] > maxDistFromStat) maxDistFromStat = c[c.length - 1];
    if ((n - 1) - c[0] > maxDistFromStat) maxDistFromStat = (n - 1) - c[0];
    return maxDistFromStat;
}