//Determines the minumum amount of elements that have to be deleted from an array to leave only elements of equal value

function equalizeArray(arr) {
    let maxLength = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            let tempArr = arr.filter(e => e == arr[i]);
            if (tempArr.length > maxLength) {
                maxLength = tempArr.length;
            }
        }
    }
    return arr.length - maxLength;
}