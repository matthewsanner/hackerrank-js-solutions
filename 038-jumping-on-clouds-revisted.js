//determines the amount of energy left from 100 after some cloud jumping returns you back to the original position based on a jumping length formula, each jump uses 1 energy and when you land on a thundercloud it takes 2 energy

function jumpingOnClouds(c, k) {
    let energy= 100;
    let n= c.length;
    let i=0;
    i=(i+k)%n;
    energy-=1;
    if (c[i]==1){
        energy-=2;
    }
    while (i!==0){
        i=(i+k)%n
        energy-=1
        if (c[i]==1){
            energy-=2;
        }
    }
    if (i==0){
        return energy;
    }
}