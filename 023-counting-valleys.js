//returns the amount of valleys represented in a string of up or down values that track the elevation of a line on a landscape, where the string begins and ends at sea level

function countingValleys(steps, path) {
    let elevation=0;
    let valleys=0;
    for (let i=0; i<steps; i++) {
        if (elevation==-1 && path[i]=='U') {
            valleys+=1;
        }
        if (path[i]=='D') {
            elevation-=1;
        }
        if (path[i]=='U') {
            elevation+=1;
        }
    }
    return valleys;
}