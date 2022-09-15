//determines the amount of pairs of numbers in an array that when summed are evenly divisible by a given value

function divisibleSumPairs(n, k, ar) {
    let numSumPairs= 0;
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){ 
                if (i<j && (ar[i]+ar[j])%k==0){
                    numSumPairs++;
                }
            }
        }
    return numSumPairs;
}