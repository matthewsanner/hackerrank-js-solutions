//given a set of containers with varying numbers and types of balls inside, where the number of containers is equal to the number of types of balls, returns whether or not it is possible to trade balls 1 to 1 across the containers such that each container would contain only one type of ball

function organizingContainers(container) {
    let n = container.length;
    let capEach = [];
    let typeEach = [];
    for (let i = 0; i < n; i++) {
        let cap = 0;
        let type = 0;
        for (let j = 0; j < n; j++) {
            cap += container[i][j];
            type += container[j][i];
        }
        capEach.push(cap);
        typeEach.push(type);
    }
    capEach.sort((a, b) => a - b);
    typeEach.sort((a, b) => a - b);

    for (let k = 0; k < n; k++) {
        if (capEach[k] != typeEach[k]) {
            return 'Impossible';
        }
    }
    return 'Possible';
}