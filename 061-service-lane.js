// Determines the widest car that can pass through certain given sections of a service lane given widths of road that vary at a regular interval along the service lane

function serviceLane(width, cases) {
    let minNums = [];
    for (let c of cases) {
        let minNum = Math.min(...width.slice(c[0], c[1] + 1));
        minNums.push(minNum);
    }
    return minNums;
}