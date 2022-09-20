function birthdayCakeCandles(candles) {
  let highest = Math.max(...candles);
  return candles.filter(element => element === highest).length;
}