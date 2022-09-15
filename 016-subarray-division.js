//searches an array for subarrays (slices) that are equal in length to a given variable, and sum to a given value

function birthday(s, d, m) {
    let numberWays= 0;
    for (let i=0; i<s.length; i++) {
        for (let j=1; j<s.length+1; j++) {
            let currentSlice=s.slice(i,j);
            if (currentSlice.length==m && currentSlice.reduce((x,y) => x+y)==d) {
                numberWays++;
            }
        }
    }
    return numberWays;
}