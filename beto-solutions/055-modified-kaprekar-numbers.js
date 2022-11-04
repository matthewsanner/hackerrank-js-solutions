function kaprekarNumbers(p, q) {
  let answerNums = [];
  for (let i=p; i<= q; i++) {
      let n = i*i;
      let d = i.toString().length;
      let nArr = n.toString().split('');
      let rDigits = nArr.splice(-d, d);
      let lDigits = nArr;
      
      if (i === 1) {
          answerNums.push(i)
      };
      
      if (parseInt(lDigits.join('')) + parseInt(rDigits.join('')) === i) {
          answerNums.push(i)
      };
  };
  answerNums.length ? console.log(answerNums.join(' ')) : console.log("INVALID RANGE");
};