//determines the minimum possible distance (difference between indices) between any two identical numbers within an array, if there are no identical number pairs, returns -1

function minimumDistances(a) {
    let minDist = -1;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j] && j - i < minDist || a[i] == a[j] && minDist == -1) {
                minDist = j - i;
                break
            }
        }
    }
    return minDist;
}