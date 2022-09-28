//Given an array of numbered clouds, numbered 0 or 1, 0 being safe, 1 being a thudercloud that must be avoided. Returns the minimum amount of jumps of length 1 or 2 clouds that can be taken to get safely to the final cloud. Given that it's always possible to do so.

function jumpingOnClouds(c) {
    let i = 0;
    let counter = 0;
    while (i < c.length - 1) {
        if (c[i + 2] == 0) {
            counter += 1
            i += 2
        }
        else {
            counter += 1
            i += 1
        }
    }
    return counter;
}