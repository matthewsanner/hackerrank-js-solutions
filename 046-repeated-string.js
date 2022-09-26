//Returns the number of times the character 'a' appears in a an infinite string of repeating s strings of n length

function repeatedString(s, n) {
    let answer = 0;
    let fullRepeats = Math.floor(n / s.length);
    let remainder = n % s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            answer += fullRepeats;
            if (i < remainder) {
                answer += 1;
            }
        }
    }
    return answer;
}