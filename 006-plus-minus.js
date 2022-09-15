//calculates the ratios of positive, negative, and zero numbers in an array to the 6th decimal place

function plusMinus(arr) {
    let pos= 0;
    let neg= 0;
    let zero= 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos ++;
        } else if (arr[i] < 0) {
            neg ++;
        } else {
            zero ++;
        }
    }
    let posRatio= pos/arr.length;
    let negRatio= neg/arr.length;
    let zeroRatio= zero/arr.length;
    
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}