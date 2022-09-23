function migratoryBirds(arr) {
  let max = 0;
  let birdId = 0;
  for (let j = 0; j < 6; j++) {
      let currentArr = arr.filter(i => i == j);
      if (currentArr.length > max) {
          max = currentArr.length;
          birdId = j;
      };
  };
  return birdId;
};