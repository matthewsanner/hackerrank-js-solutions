function designerPdfViewer(h, word) {
  let alphRef = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let maxHeight = 0;
  word.split('').forEach(letter => {
      if (letter) {
          let indexLet = alphRef.indexOf(letter);
          let height = h[indexLet];
          if (height > maxHeight) {
              maxHeight = height;
          }; 
      }
  });
  return maxHeight * word.split('').length;
};