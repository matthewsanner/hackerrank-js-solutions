// convert time given in numerals (ie: 5:16), where h is the hour and m is the minutes, into time given in words utilizing a common system for telling time in English

function timeInWords(h, m) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen','seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half'];
    if (m == 0) {
        return `${nums[h]} o' clock`
    }
    if (m == 1) {
        return `${nums[m]} minute past ${nums[h]}`
    }
    if (m > 1 && m <= 14 || m > 15 && m <= 29) {
        return `${nums[m]} minutes past ${nums[h]}`
    }
    if (m == 15 || m == 30) {
        return `${nums[m]} past ${nums[h]}`
    }
    if (m > 30 && m <= 44 || m > 45 && m <= 58) {
        return `${nums[60 - m]} minutes to ${nums[h + 1]}`
    }
    if (m == 45) {
        return `${nums[60 - m]} to ${nums[h + 1]}`
    }
    if (m == 59) {
        return `${nums[60 - m]} minute to ${nums[h + 1]}`
    }
}