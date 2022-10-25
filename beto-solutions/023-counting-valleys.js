function countingValleys(steps, path) {
  let seaLevel = 0;
  let valleyNum = 0;
  for (let i = 0; i < steps; i++) {
      if (path[i] === "D") {
          seaLevel --;
      };
      if (path[i] === "U") {
          seaLevel++;
      };
      if ((seaLevel === -1) && (path[i] === "D")) {
          valleyNum++;
      }
  };
  return valleyNum;
}