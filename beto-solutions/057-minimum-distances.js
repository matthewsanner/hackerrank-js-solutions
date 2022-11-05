function minimumDistances(a) {
  let minDistance = 0;
  for (let i=0; i<a.length; i++) {
      for (let j=i+1; j<a.length; j++) {
          if (a[i] === a[j]) {
              if (minDistance === 0) {
                  minDistance = Math.abs(i - j);
              };
              if (minDistance > Math.abs(i - j)) {
                  minDistance = Math.abs(i - j);
              };
          };
      }
  };
  return minDistance === 0 ? -1 : minDistance;
};