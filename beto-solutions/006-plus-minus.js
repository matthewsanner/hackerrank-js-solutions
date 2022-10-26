function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach(element => {
      if (element > 0) {
          positive++;
      };
      if (element === 0) {
          zero++
      };
      if (element < 0) {
          negative++
      };
  })
  let newPositive = positive / arr.length;
  let newNegative = negative / arr.length;
  let newZero = zero / arr.length;
  console.log(newPositive.toFixed(6)); 
  console.log(newNegative.toFixed(6)); 
  console.log(newZero.toFixed(6));
};


