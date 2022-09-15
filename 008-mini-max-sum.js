//finds the minimum and maximum values that can be calculated by summing exactly 4 of 5 integers in an array

function miniMaxSum(arr) {
    let sum= arr.reduce((a,b) => a+b);
    let maxSum= sum - Math.min(...arr);
    let minSum= sum - Math.max(...arr);
    console.log (`${minSum} ${maxSum}`);
}