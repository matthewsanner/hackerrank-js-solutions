function encryption(s) {
  let root = Math.sqrt(s.length);
  let columns = Math.ceil(root);
  let storage = [];
  let final = "";
  for (let i=0; i<=s.length; i+=columns) {
      let currStr = s.slice(i, i+columns);
      if (currStr) {
          storage.push(s.slice(i, i+columns));
      };
  };
  for (let j=0; j<columns; j++) {
      storage.forEach(str => {
          if (str[j]) {
            final += str[j]  
          };
      });
      final += " ";
  };
  return final;
};