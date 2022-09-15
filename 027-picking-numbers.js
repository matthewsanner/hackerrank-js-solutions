//finds the longest subarray where the absolute difference between any two elements is less than or equal to 1

function pickingNumbers(a) {
    let maxLength=0
    for (let i=0; i<a.length; i++){
        const subarray= a.filter(subNum => a[i]-subNum === 0 || a[i]-subNum === -1);
        if (subarray.length > maxLength) {
            maxLength = subarray.length;
        }
    }
    return maxLength;  
}

//or alternatively, using forEach
/*
function pickingNumbers(a) {
    let maxLength=0
    a.forEach(num => {
        const subarray= a.filter(subNum => num-subNum === 0 || num-subNum === -1);
        if (subarray.length > maxLength) {
            maxLength = subarray.length;
        }
    });
    return maxLength;  
}
*/