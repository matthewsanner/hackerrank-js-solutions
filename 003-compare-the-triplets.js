//compares two arrays containing scores for respective players, determines who won how many rounds

function compareTriplets(a, b) {
    let aScore=0;
    let bScore=0;
    for (let i=0; i<a.length; i++) {
        if (a[i]>b[i]) {
            aScore+=1;
        };
        if (b[i]>a[i]) {
            bScore+=1;
        };
    }
    return [aScore, bScore];
}