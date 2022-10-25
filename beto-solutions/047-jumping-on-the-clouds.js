function jumpingOnClouds(c) {
  let counter = 0;
  for (let i = 1; i < c.length; i++) {
      if (c[i+1] === 0) {
          counter++;
          i++
      } else {
          counter++
      };
  };
  return counter;
}