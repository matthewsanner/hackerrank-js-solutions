function pickingNumbers(a) {
  let counter = 0;
  for (let i=0; i < a.length; i++) {
    let currentArr = a.filter((element) => a[i] - element === 0 || a[i] - element === 1);
     if (currentArr.length > counter) {
         counter = currentArr.length;
     };
  };
  return counter;
};
