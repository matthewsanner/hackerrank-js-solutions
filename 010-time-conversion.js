//converts 12-hour time into 24-hour military time

function timeConversion(s) {
    let hours=s.slice(0,2);
    let shortString=s.slice(2,8);
    if (hours==='12' && s[8]==='A'){
        hours='00';
    } else if (hours==='12'){
    } else if (s[8]==='P'){
        hours=parseInt(hours)+12;
    }
    let militaryTime= '';
    militaryTime+= hours;
    militaryTime+= shortString;
    return militaryTime;
}