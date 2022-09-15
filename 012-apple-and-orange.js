//given locations on a plane of a house and an apple and orange tree, then the distance that apples and oranges fall from each tree, determines which apples and oranges fall on the house 

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let n= apples.length;
    let m= oranges.length;
    let applesHouse= 0;
    let orangesHouse= 0;
    for (let i=0; i<n; i++){
        if (a+apples[i]>=s && a+apples[i]<=t) {
            applesHouse+=1;
        }
    }
    for (let i=0; i<m; i++){
        if (b+oranges[i]>=s && b+oranges[i]<=t) {
            orangesHouse+=1;
        }
    }
    console.log(applesHouse);
    console.log(orangesHouse);
}