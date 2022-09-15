//given an amount of chairs numbered from 1, and an amount of candies given out starting at a given chair position, determines which chair receives the last candy

function saveThePrisoner(n, m, s) {
    let lastCandy=(m%n)+s-1;
    //fix edge cases
    if (lastCandy>n){
        lastCandy=lastCandy-n;
    }
    if (lastCandy==0){
        lastCandy=n;
    }
    return lastCandy;
}