function bonAppetit(bill, k, b) {
  let annaOwes = bill.reduce((a, b) => a + b) - bill[k]
  if (annaOwes / 2 === b) {
      console.log("Bon Appetit");
  } else { 
      console.log(b - annaOwes / 2);
  };
};