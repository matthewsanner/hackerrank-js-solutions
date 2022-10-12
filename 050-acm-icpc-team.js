//Given binary strings representing team members' knowledge of particular subjects (0 means they don't know that subject, 1 means they do), determines the max subjects any 2-member team could have knowledge of and how many teams can cover that max number of subjects

function acmTeam(topic) {
    let maxTopics = 0;
    let numTeams = 0;
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let topics = 0;
            for (let k = 0; k < topic[0].length; k++) {
                if (topic[i][k] == 1 || topic[j][k] == 1) {
                    topics += 1;
                }
            }
            if (topics > maxTopics) {
                maxTopics = topics;
                numTeams = 1;
            }
            else if (topics == maxTopics) {
                numTeams += 1;
            }
        }
    }
    return [maxTopics, numTeams];
}