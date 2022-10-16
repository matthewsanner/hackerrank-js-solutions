function squares(a, b) {
  let lowerRg = Math.ceil(Math.sqrt(a));
  let higherRg = Math.floor(Math.sqrt(b));
  let counter = 0;
  for (let i = lowerRg; i <= higherRg; i++) {
      counter++
  };
  return counter;
};