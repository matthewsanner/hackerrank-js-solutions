function organizingContainers(container) {
  let totalBalls = {};
  let totalTypes = {};
  
  container.forEach((arr, index) => {
      totalBalls[index] = arr.reduce((a, b) => a + b);
      for(let i=0; i<arr.length; i++) {
          if (index === 0) {
              totalTypes[i] = 0;
          };
          totalTypes[i] += arr[i];
      };
  });
  
  let counter = 0;
  for (let i=0; i<container.length; i++) {
      for (let j=0; j<container.length; j++) {
          if (totalBalls[i] === totalTypes[j]) {
              counter++
          };
      };
  };
  
return counter >= container.length ? "Possible" : "Impossible";
};