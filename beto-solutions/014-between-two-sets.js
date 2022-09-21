function getTotalX(a, b) {
  let total = 0;
  for (let i = 0; i <= 100; i++) {
      if (a.every(int => i % int === 0)) {
          if (b.every(int => int % i === 0)) {
              total++;
          };
      };
  };
  return total;
};