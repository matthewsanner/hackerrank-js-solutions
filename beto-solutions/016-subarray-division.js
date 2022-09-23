function birthday(s, d, m) {
  let ways = 0;
  for (let i = 0; i < s.length; i++) {
      let arr = s.slice(0 + i, m + i);
      if (arr.reduce((a, b) => a + b) === d) {
          ways++;
      };
  };
  return ways;
};