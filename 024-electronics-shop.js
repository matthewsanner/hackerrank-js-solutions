//determines the most expensive combination of computer keyboard and USB drive that can be purchased with a given budget, given arrays of costs of available items in both categories

function getMoneySpent(keyboards, drives, b) {
    let maxPrice=-1;
    for (let i=0; i<keyboards.length; i++){
        for (let j=0; j<drives.length; j++){
            if (keyboards[i]+drives[j]<=b && keyboards[i]+drives[j]>maxPrice){
                maxPrice=keyboards[i]+drives[j];
            }
        }
    }
    return maxPrice;
}