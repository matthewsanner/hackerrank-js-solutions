function beautifulDays(i, j, k) {
  let beautDays = 0;
  for (let day = i; day <= j; day++) {
      let reverse = parseFloat(day.toString().split("").reverse().join(""))
      if ((day - reverse) % k === 0) {
          beautDays += 1;
      };
  };
  return beautDays;
};