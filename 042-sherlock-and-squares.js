//determine how many numbers in a range are square integers (integers which are the squares of an integer)

//my original answer, a bit crude and compute heavy
/*function squares(a, b) {
    let squareInts= [];
    //31622 when squared creates the highest possible square integer in the range restrictions given
    for (let i=1; i<=31622; i++){
        squareInts.push(i*i)
    }
    let inRange= squareInts.filter(int=>int>=a && int<=b);
    return inRange.length;
}*/

//big brain simple relationships one-liner
function squares(a, b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1
}