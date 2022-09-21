function gradingStudents(grades) {
  grades.forEach((element, index) => {
      if (element > 37 && (element + 1) % 5 === 0) {
          grades[index] = grades[index] + 1;
      };
      
      if (element > 37 && (element + 2) % 5 === 0) {
          grades[index] = grades[index] + 2;
      };
  });
  return grades;
};