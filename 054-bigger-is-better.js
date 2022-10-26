//given a string of characters, by rearranging the characters, form a new string that is the next closest possible string alphabetically to the original string among all possible permutations of the string

function biggerIsGreater(w) {
    let arr = [...w];
    //find index of a pivot character in array with character(s) after it that are greater in "value" and store those character(s)
    for (let i = arr.length - 2; i >= 0; i--) {
        let biggerChars = arr.slice(i + 1).filter((v) => arr[i] < v);
        if (biggerChars.length > 0) {
            //find the smallest value character of those bigger value characters
            let indexSmallest = i + 1 + arr.slice(i + 1).indexOf(biggerChars.sort()[0]);
            //swap the pivot character with that character
            [arr[i], arr[indexSmallest]] = [arr[indexSmallest], arr[i]];
            //sort the rest of the string after pivot character in ascending value order
            return arr.slice(0, i + 1).concat(arr.slice(i + 1).sort()).join('');
        }
    }
    //if we can't find a pivot character, there is no answer meeting the criteria
    return 'no answer';
}