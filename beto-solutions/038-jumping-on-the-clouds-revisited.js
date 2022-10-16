function jumpingOnClouds(c, k) {
  let energy = 100;
  let i = 0;
  do {
      c[i] === 1 ? energy -= 3 : energy -= 1;
      i = (i + k) % c.length;
  } while (i);
  return energy 
};