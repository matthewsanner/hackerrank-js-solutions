//returns the sum of values in an array (not big enough to require special consideration in js)

function aVeryBigSum(ar) {
    return ar.reduce((x,y) => x+y);
}