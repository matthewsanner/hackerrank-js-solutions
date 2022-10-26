function pageCount(n, p) {
  let totalTurns = Math.floor(n / 2);
  let fromFront = Math.floor(p / 2);
  let fromBack = totalTurns - fromFront;
  
  return (fromFront <= fromBack ? fromFront : fromBack);
};