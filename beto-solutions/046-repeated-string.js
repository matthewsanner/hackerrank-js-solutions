function repeatedString(s, n) {
  let completeS = Math.floor(n / s.length) ;
  let remainder = n % s.length;
  let totalA = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'a') {
          totalA += completeS
          if (i < remainder) {
              totalA++
          };
      };
  };
  return totalA
};
