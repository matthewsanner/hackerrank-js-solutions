// Given an array of length n with values equal to the index # + 1, determines if it is possible to rearrange the values in such a way that the absolute difference between the index # + 1 and the value will always be equal to k. If it is possible, returns the sequence of values. If not, returns -1.

function absolutePermutation(n, k) {
    let result = [];
    let dir = 1;

    for (let index = 1, kTrack = 0; index <= n; index += 1, kTrack += 1) {
        if (kTrack == k) {
            dir *= -1;
            kTrack = 0;
        }
        let value = index + (k * dir);

        if (value > n) return [-1];

        result.push(value);
    }
    return result;
}