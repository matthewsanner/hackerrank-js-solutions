function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (y1 > y2) fine = 10000
  if (y1 == y2 && m1 > m2) fine = (m1 - m2) * 500
  if (y1 == y2 && m1 == m2 && d1 > d2) fine = (d1 - d2) * 15
  return fine;
};