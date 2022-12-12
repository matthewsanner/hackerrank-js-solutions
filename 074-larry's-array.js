// Determines if a set of sequential numbers out of order can be put back into order by rotating any sets of three values in the sequence in a particular fashion as many times as needed.

function larrysArray(A) {
    let count = 0;
    // if the number of 'inversions' or numbers that are out of numerical order is an even number then it is possible
    for (let i = 1; i < A.length; i++) {
        for (let j = 0; j < i; j++) {
            if (A[j] > A[i]) count++;
        }
    }
    return (count % 2 == 0) ? 'YES' : 'NO';
}