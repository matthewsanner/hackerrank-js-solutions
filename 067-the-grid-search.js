// Given an array of strings of digits representing a rectangular grid, determines if another array of strings of digits representing a rectangular grid can be found within the first grid.

function gridSearch(G, P) {
    let startIndex;
    for (let i = 0; i < G.length; i++) {
        for (let j = 0; j < G[0].length; j++) {
            if (G[i].includes(P[0], j)) {
                startIndex = G[i].indexOf(P[0], j)
                for (let k = 1; k < P.length; k++) {
                    if (G[i + k].indexOf(P[k], startIndex) !== startIndex) {
                        break;
                    } else {
                        if (k == P.length - 1) {
                            return 'YES'
                        }
                    }
                }
            }
        }
    }
    return 'NO'
}