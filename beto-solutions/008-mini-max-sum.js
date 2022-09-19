function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => a + b)
  let highest = sum - Math.max(...arr);
  let lowest = sum - Math.min(...arr);
  console.log(highest, lowest);
}