//Given a list of scores, evaluate scores in an array one at a time determining where they belong on a list of high scores (ranked list is descending, player scores are ascending)

function climbingLeaderboard(ranked, player) {
    let positions = [];
    let rankedSet = [...new Set(ranked)];
    //index # of last (lowest) ranked score
    let i = rankedSet.length - 1;
    player.forEach(score => {
        while (i >= 0) {
            if (score >= rankedSet[i]) {
                i--;
            } else {
                //+1 to bump from index count to rank count, and +1 because the score is worse
                positions.push(i + 2);
                break;
            }
        }
        //if i goes below 0, the score is higher than any on the ranked array, thus #1
        if (i < 0) positions.push(1);
    });
    return positions;
}

//or alternatively, with a for loop
/*function climbingLeaderboard(ranked, player) {
    let positions = [];
    let rankedSet = [...new Set(ranked)];
    //index # of last (lowest) ranked score
    let i = rankedSet.length - 1;
    for (let j=0; j<player.length; j++){
        while (i >= 0) {
            if (player[j] >= rankedSet[i]) {
                i--;
            } else {
                //+1 to bump from index count to rank count, and +1 because the score is better
                positions.push(i + 2);
                break;
            }
        }
        //if i goes below 0, the score is higher than any on the ranked array, thus #1
        if (i < 0) positions.push(1);
    }
    return positions;
}
*/