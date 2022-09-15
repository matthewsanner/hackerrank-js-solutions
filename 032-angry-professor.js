//determines if a class will be cancelled based on the arrival times of students, if the amount students who are on time or early meets or exceeds the threshold then class is not cancelled, otherwise it is cancelled

function angryProfessor(k, a) {
    let onTime= a.filter(time=> time<=0);
    if (onTime.length>=k){
        return 'NO';
    }
    else return 'YES';
}

//alternative solutions
/*function angryProfessor(k, a) {
    let onTime= a.filter(time=> time<=0);
    return onTime.length >= k ? 'NO' : 'YES';
}

function angryProfessor(k, a) {
    a.sort((a,b)=>a-b)
    return a[k-1] <= 0 ? 'NO' : 'YES';
}*/