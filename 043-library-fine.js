//determines library fine given return date and due date based on specific formula

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) return 10000;
    if (y1 === y2 && m1 > m2) return (m1 - m2) * 500;
    if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15;
    return 0;
}