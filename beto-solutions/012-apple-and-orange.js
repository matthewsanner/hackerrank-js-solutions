function countApplesAndOranges(s, t, a, b, apples, oranges){
  let applesNum = 0;
  let orangesNum = 0;
  
  apples.forEach((element, index) => {
      apples[index] = apples[index] + a;
      if (apples[index] >= s && apples[index] <= t) {
          applesNum++;
      };
  });
  
  oranges.forEach((element, index) => {
      oranges[index] = oranges[index] + b;
      if (oranges[index] >= s && oranges[index] <= t) {
          orangesNum++;
      };
  } );
  console.log(applesNum);
  console.log(orangesNum);
};