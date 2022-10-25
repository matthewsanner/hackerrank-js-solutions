function viralAdvertising(n) {
  let cumulative = 0;
  let seeAd = 5;
  for (let i=0; i<n; i++) {
      cumulative += Math.floor(seeAd/2);
      seeAd = Math.floor(seeAd/2) * 3;
  };
  return cumulative;
};