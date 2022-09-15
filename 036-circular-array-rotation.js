//finds the value at query index locations after right circular rotating the array k times

function circularArrayRotation(a, k, queries) {
    let answer= [];
    for (let i=0; i<queries.length; i++){
        let tracker= queries[i]-(k%a.length);
        if (tracker<0){
            tracker+=a.length
        }
        answer.push(a[tracker]);
    }
    return answer;
}