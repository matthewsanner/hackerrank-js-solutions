// Given a string of A-Z values and underscores that represent ladybugs with colors varying by character and underscores representing empty spaces, determines whether it is possible for the ladybugs to move around and make all ladybugs "happy"- meaning they have at least one other ladybug of the same color next to them. A move means a ladybug moves from its space to an empty space.

function happyLadybugs(b) {
    for (let i = 0; i < b.length; i++) {
        // returns NO if there is only 1 of any ladybug color
        if (b[i] !== "_" && b.indexOf(b[i]) === b.lastIndexOf(b[i])) return "NO";
        // returns NO if there is any unhappy ladybug and no empty spaces
        if (b.indexOf("_") === -1 && b[i] !== b[i - 1] && b[i] !== b[i + 1]) return "NO";
    }
    return "YES";
}