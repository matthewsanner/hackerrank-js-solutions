//Determines the minimum amount of page turns needed to get to a particular page in a book, whether turning from front or back

function pageCount(n, p) {
    const totalTurns = Math.floor(n / 2);
    const turnsFromFront = Math.floor(p / 2);
    const turnsFromBack= totalTurns-turnsFromFront;

    if (turnsFromFront<= turnsFromBack) {
        return turnsFromFront;
    }
    if (turnsFromBack< turnsFromFront) {
        return turnsFromBack;
    }
}