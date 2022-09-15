//two kangaroos jump repeatedly starting from different locations and with different length of jumps, this function determines whether they will ever meet

function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) 
        return 'NO';
    if ((x1-x2) % (v2-v1) === 0)
        return 'YES';
    else 
        return 'NO';
}