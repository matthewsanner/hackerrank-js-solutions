//determines how many people like an ad after a certain number of rounds of sharing in which half of the people shown the ad like it and each one of those shares with three friends

function viralAdvertising(n) {
    let totalLikes= 0;
    let adPeople= 5;
    for (let i=0; i<n; i++){
        totalLikes+= Math.floor(adPeople/2);
        adPeople= Math.floor(adPeople/2)*3;
    }
    return totalLikes;
}