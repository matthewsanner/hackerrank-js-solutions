// Determines the value given by a counter after a time, t. It counts down from 3 for the first 3 seconds, then resets to 2 times the initial number of the prior cycle and counts down to 1, resets to 2 times... and so on.

function strangeCounter(t) {
    let runTime = 0;
    for (let i = 0; ; i++) {
        runTime += 3 * 2 ** i
        if (t <= runTime) {
            return runTime - t + 1;
        }
    }
}