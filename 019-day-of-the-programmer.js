//determines the day of a particular holiday, determined to be the 256th day of the year, through time, taking into account big changes in the calendar at certain dates

function dayOfProgrammer(year) {
    // Write your code here
    let answer= '';
    if (year<1918) {
        if (year%4==0) {
            answer=`12.09.${year}`;
        }
        else {
            answer=`13.09.${year}`;
        }
    }
    if (year==1918) {
        answer='26.09.1918';
    }
    if (year>1918) {
        if (year%400 == 0) {
            answer=`12.09.${year}`;
        }
        else if (year%4 == 0 && year%100 !== 0) {
            answer=`12.09.${year}`;
        }
        else {
            answer=`13.09.${year}`;
        }
    }
    return answer;
}