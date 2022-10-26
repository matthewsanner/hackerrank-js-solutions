function circularArrayRotation(a, k, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++){
      let index = queries[i]-(k % a.length);
      if (index < 0){
          index += a.length
      }
      answer.push(a[index]);
  }
  return answer;
};
