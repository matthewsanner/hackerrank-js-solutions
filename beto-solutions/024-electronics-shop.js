function getMoneySpent(keyboards, drives, b) {
  let mostExp = -1;
 for (let k = 0; k < keyboards.length; k++ ) {
     for (let d = 0; d < drives.length; d++) {
         let current = keyboards[k] + drives[d];
         if (current > mostExp && current <= b) {
             mostExp = current;
         };
     };
 };
 return mostExp;
};