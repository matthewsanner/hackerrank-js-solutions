function permutationEquation(p) {
  let answer = [];
  for (let i = 1; i <= p.length; i++) {
      let indexFirst = p.indexOf(i) + 1;
      let indexSecond = p.indexOf(indexFirst) + 1;
      answer.push(indexSecond);
  };
  return answer;
};