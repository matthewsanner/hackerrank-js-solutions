//Checks an array to determine which value out of 6 possible values is the most numerous

function migratoryBirds(arr) {
    let currentMaxAmount=0;
    let frequentID= 0;
    for (let j=1; j<6; j++){
        let sliceArr=arr.filter(i=>i==j);
        if (sliceArr.length>currentMaxAmount){
                currentMaxAmount=sliceArr.length;
                frequentID= j;
            }
        }
    return frequentID;
}