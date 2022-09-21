function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;
  let lowest = scores[0];
  let highest = scores[0];
  scores.forEach((element, index) => {
      if (element < lowest) {
          minCount ++
          lowest = element
      };
      if (element > highest) {
          maxCount ++
          highest = element
      };
  })
  return [maxCount, minCount];
}