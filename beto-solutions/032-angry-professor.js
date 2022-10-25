function angryProfessor(k, a) {
  let present = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] < 1) {
          present += 1;
      };
  };
  return present >= k ? "NO" : "YES"
};