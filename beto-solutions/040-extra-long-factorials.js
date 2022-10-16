function extraLongFactorials(n) {
  let bigFact = BigInt(n);
  for (let i = BigInt(n - 1); i > 0; i--) {
      bigFact = bigFact * BigInt(i);
  };
  console.log(bigFact.toString());
};