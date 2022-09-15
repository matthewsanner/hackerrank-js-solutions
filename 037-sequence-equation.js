//given an array containing every number in a range 1 to x, 1 to 50 at most, finds the index of the number 1, 2, and so on, then finds that number and reports it's index number

function permutationEquation(p) {
    let answer= []
    for (let i=1; i<=p.length; i++){
        let index= p.indexOf(i)+1;
        let index2= p.indexOf(index)+1;
        answer.push(index2);
    }
    return answer;
}