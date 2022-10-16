//Finds the value of the factorial of numbers 1-100, without using scientific notation

function extraLongFactorials(n) {
    let answer= BigInt(1);
    for (let i=BigInt(n); i>1; i--) {
        answer*=i;
    }
    console.log(answer.toString());
}