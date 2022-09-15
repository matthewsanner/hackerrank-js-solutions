//returns the amount of values in an array that are equal to the the largest integer in the array

function birthdayCakeCandles(candles) {
    let n= candles.length;
    let maxHeight= Math.max(...candles);
    let numMax= 0;
    for (let i=0; i<n; i++){
        if (candles[i]===maxHeight){
            numMax+=1;
        }
    }
    return numMax;
}