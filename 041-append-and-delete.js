//determines if you can turn string s into string t by using exactly k moves, where a move is either to delete a character from the end of the string or to add a character to the end of the string, where deleting a character from an empty string counts as a move but returns simply another empty string

function appendAndDelete(s, t, k) {
    let counter=0;
    if (k>=s.length+t.length){
            return 'Yes';
    }
    if (s[0]!==t[0]){
            return 'No';
    }
    else {
        for (let i=0; i<s.length && i<t.length; i++){
            if (s[i]==t[i]){
                counter+=1;
            }
            else break;
        }
        if (k<s.length-counter+t.length-counter){
            return 'No';
        }
        if (k==s.length-counter+t.length-counter){
            return 'Yes';
        }
        if (k>s.length-counter+t.length-counter){
            if ((s.length-counter+t.length-counter-k)%2!==0){
                return 'No';
            }
            else return 'Yes';
        }
    }
}