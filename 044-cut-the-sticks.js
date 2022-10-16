//given an array of numbers representing the length of a bunch of sticks, returns the amount of sticks remaining before removing the shortest sticks and cutting remaining sticks by that length repeatedly until there is no sticks left

//brute force answer
/*function cutTheSticks(arr) {
    let answer= [];
    while (arr.length>0) {
        answer.push(arr.length);
        let minLength= Math.min(...arr);
        arr = arr.filter(num => num !== minLength);
        for (let i=0; i<arr.length; i++) {
            arr[i]-=minLength;
        }
    }
    return answer;
}*/

//clever and efficient answer
function cutTheSticks(arr) {
    arr.sort((a, b) => {
        return a - b;
    })
    let answer = [];
    let i = 0;
    while (i < arr.length) {
        answer.push(arr.length - i);
        while (arr[i] === arr[i + 1]) {
            i++;
        }
        i++;
    }
    return answer;
}