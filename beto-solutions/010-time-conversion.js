function timeConversion(s) {
  let sParsed = s.split(":");
  let amPm = sParsed[2].slice(2);
  sParsed[2] = sParsed[2].slice(0,2);
  
  if (amPm === "AM" && sParsed[0] !== "12") {
      return sParsed.join(":")
  };
  
  if (amPm === "AM" && sParsed[0] === "12") {
      sParsed[0] = "00";
      return sParsed.join(":")
  };
  
  if (amPm === "PM" && sParsed[0] === "12") {
      return sParsed.join(":");
  };
  
  if (amPm === "PM" && sParsed[0] !== "12") {
    let plus12 = parseInt(sParsed[0]) + 12;
      sParsed[0] = plus12.toString();
      return sParsed.join(":");
  };
};