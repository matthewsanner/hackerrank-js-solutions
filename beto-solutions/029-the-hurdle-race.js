function hurdleRace(k, height) {
  let potions = 0;
  height.forEach(element => {
      if (k < element) {
          potions += element - k;
          k = element;
      };
  });
  return potions;
};