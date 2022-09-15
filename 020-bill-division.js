//determines if a bill was split correctly considering that one party didn't partake of one item and therefore shouldn't share the cost of it, and if not determines how much money should be refunded to the party that didn't partake of the item

function bonAppetit(bill, k, b) {
    bill.splice(k,1);
    let adjustedTotal=bill.reduce((i,j)=>i+j);
    if (b==adjustedTotal/2){
        console.log('Bon Appetit');
    }
    if (b!==adjustedTotal/2){
        console.log(b-(adjustedTotal/2));
    }
}