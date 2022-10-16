function cutTheSticks(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let answer = [];
  
  while(sorted.length > 0) {
      answer.push(sorted.length)
      for (let i = sorted.length - 1; i >= 0; i--) {
          sorted[i] = sorted[i] - sorted[0];
      };
      sorted = sorted.filter((element) => element > 0)  
  };
  return answer;
};