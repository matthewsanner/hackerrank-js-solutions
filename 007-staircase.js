//prints a right-leaning 'staircase' of hashtags of height n

function staircase(n) {
    let stairs = ''
    for (let i=0; i<n; i++){
        stairs+='#';
        console.log(stairs.padStart(n));
    }
}
