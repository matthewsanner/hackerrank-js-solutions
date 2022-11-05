//splits a number into individual digits and returns how many of those digits are even divisors of the original number

function findDigits(n) {
    let answer=0;
    let m=n.toString().split('');
    for (let i=0; i<m.length; i++){
        if (n%m[i]==0){
            answer+=1;
        }
    }
    return answer;
}

//clever one-liner
// function findDigits(n) {
//     return n.toString().split('').filter((digit) => n % digit == 0).length;
// }