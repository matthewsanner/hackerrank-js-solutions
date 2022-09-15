//Finds the height of a tree after n seasons where there are two repeating seasons of growth, the first where the tree doubles in height, and second where it grows by one unit

function utopianTree(n) {
    let height=1;
    for (let i=1; i<=n; i++){
        if (i%2!==0){
            height=height*2;
        }
        if (i%2==0){
            height+=1;
        }
    }
    return height;
}