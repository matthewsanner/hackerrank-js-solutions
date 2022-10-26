//returns an encryption of the string s (which contains no spaces) such that the string is written into a squareish grid pattern along the rows, then the new encrypted string is pulled from the columns of the square with spaces at the end of each column

function encryption(s) {
    const bounds= Math.sqrt(s.length);
    const columns= Math.ceil(bounds);
    let newString= '';
    //focuses on characters in each column
    for (let i=0; i<columns; i++){
        //iterates down the column
        for (let j=i; j<s.length; j+=columns){
            newString+=s[j];
        }
        newString+=' ';
    }
    return newString.trimEnd();
}