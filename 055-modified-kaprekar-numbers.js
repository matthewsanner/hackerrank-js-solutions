//finds numbers in a range p to q that satisify the requirements to be labeled modified Kaprekar numbers, defined as numbers which when you take the square and split the digits of it into two equal length pieces (the 2nd piece being the longer one if the length is odd) and add those two pieces together numerically, the sum is equal to the original number

function kaprekarNumbers(p, q) {
    let answer = ''
    for (let i = p; i <= q; i++) {
        let square = String(i * i).split('');
        let r = square.splice(Math.floor(square.length / 2));
        let l = square;
        if (l.length == 0) {
            l = ['0'];
        }
        r = parseInt(r.join(''));
        l = parseInt(l.join(''));
        if (r + l == i) {
            answer += i;
            answer += ' ';
        }
    }
    if (answer == '') {
        console.log('INVALID RANGE');
    }
    else {
        console.log(answer.trimEnd());
    }
}