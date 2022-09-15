//determines the size of highlight box needed for a particular word based on the max height of letter it contains and the length of the word with each character having equal width

function designerPdfViewer(h, word) {
    const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let maxHeight=0;
    for(let i=0; i<word.length; i++){
        let char= word[i];
        let index= alphabet.indexOf(char);
        let height= h[index]
        if (height>maxHeight){
            maxHeight=height;
        }
    }
    let boxArea= maxHeight*word.length;
    return boxArea;
}