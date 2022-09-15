//determines how many 'beautiful days' exist in a range of numbered days, defined as days in which the reverse of the number subtracted from the number is evenly divisible by a given constant

function beautifulDays(i, j, k) {
    let beautDays=0;
    for (let day=i; day<=j; day++){
        let reverseDay = parseFloat(day.toString().split('').reverse().join(''));
        if ((day-reverseDay)%k==0){
            beautDays++;
        }
    }
    return beautDays;
}