function equalizeArray(arr) {
  let max = 0;
  for (let i=0; i<arr.length; i++) {
     let crrntArr = arr.filter((element) => element === arr[i]);
     if (crrntArr.length > max) {
         max = crrntArr.length;
     };
  };
  return arr.length - max;
};