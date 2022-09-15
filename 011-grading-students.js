//rounds grades in an array greater than or equal to 38 up to the next multiple of five if they are only lower by 1 or 2 points

function gradingStudents(grades) {
    let n=grades.length;
    for (let i=0; i<n; i++){
        if (grades[i]<38){
        } else if ((grades[i]+1) % 5 === 0){
            grades[i]+=1;
        } else if ((grades[i]+2) % 5 === 0){
            grades[i]+=2;
        }
    }
    return grades;
}