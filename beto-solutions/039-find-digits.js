function findDigits(n) {
  let digitsAr = n.toString().split('');
  let counter = 0;
  digitsAr.forEach((element) => {
      if (n % parseInt(element) === 0) {
          counter ++
      };
  });
  return counter;
}