//identifies the amount of beautful triplets in an array of integers, defined as three numbers which are all separated by particular numerical distance given as d

//my original solution
function beautifulTriplets(d, arr) {
    let tripCount = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] == d) {
                for (let k = j + 1; k < arr.length; k++) {
                    if (arr[k] - arr[j] == d) {
                        tripCount++;
                    }
                }
            }
        }
    }
    return tripCount;
}


//clever one liner
/*function beautifulTriplets(d, arr) {
    return arr.filter(v=>arr.includes(v+d) && arr.includes(v+d+d)).length
}*/