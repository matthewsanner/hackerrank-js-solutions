// determines the possible values of a final stone in a length of stones, n, that starts at value 0 and for each stone increments by either a or b

function stones(n, a, b) {
    let highest = b * (n - 1);
    let lowest = a * (n - 1);
    if (b < a) {
        highest = a * (n - 1);
        lowest = b * (n - 1);
    }
    let diff = Math.abs(b - a);
    if (diff == 0) diff = 1;
    let numbers = [];
    for (let i = lowest; i <= highest; i += diff) {
        numbers.push(i)
    }
    return numbers;
}