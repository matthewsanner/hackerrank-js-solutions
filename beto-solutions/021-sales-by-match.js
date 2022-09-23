function sockMerchant(n, ar) {
  let pairs = 0;
  for (let i = 0; i < 101; i++) {
      let tempAr = ar.filter(s => s === i);
      pairs += Math.floor(tempAr.length / 2);
  }  
  return pairs;
};