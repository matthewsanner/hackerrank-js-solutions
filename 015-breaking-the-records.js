//Given an array of scores in a game, tracks how many times the record for lowest and highest scores are broken

function breakingRecords(scores) {
    let minRecord= scores[0];
    let maxRecord= scores[0];
    let minCount=0;
    let maxCount=0;
    for (let i=1; i<scores.length; i++) {
        if (scores[i]<minRecord){
            minRecord= scores[i];
            minCount++;
        }
        if (scores[i]>maxRecord){
            maxRecord= scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount];
}