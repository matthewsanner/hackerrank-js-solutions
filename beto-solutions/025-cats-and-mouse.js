function catAndMouse(x, y, z) {
  let CatA = Math.abs(x - z);
  let CatB = Math.abs(y - z); 
   
  if (CatA === CatB) {
      return 'Mouse C';
  };
  
  if (CatA < CatB) {
      return 'Cat A';
  };
  
  if (CatA > CatB) {
      return 'Cat B';
  };
};