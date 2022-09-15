//Given an array of integers representing the color of each sock, determines how many pairs of socks there are with matching colors

function sockMerchant(n, ar) {
    let pairs=0;
    for (let i=1; i<101; i++){
        let tempAr=ar.filter(j=>j==i);
        pairs+=Math.floor(tempAr.length/2);
    }
    return pairs;
}