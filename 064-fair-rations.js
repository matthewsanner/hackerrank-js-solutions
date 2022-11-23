// determines how many loaves of bread you have to give to people in a line if you want them all to have even numbers (2,4,6,etc.) of bread and every time you give a loaf of bread you also have to give a loaf to the person before or after that person, returns 'NO' if it is not possible

function fairRations(B) {
    let loaves = 0;
    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 == 1) {
            B[i]++;
            B[i + 1]++;
            loaves += 2;
        }
    }
    if (B[B.length - 1] % 2 == 1) return 'NO';
    else return loaves;
    // ternary option
    // return B[B.length-1] % 2 == 1 ? 'NO' : loaves
}