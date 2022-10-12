//You need to buy b black presents at price bc and w white presents at price wc, or you can exchange one color gift for the other color for a fee of z. Determines the minimum price paid for all the gifts. All numbers can be very large!

function taumBday(b, w, bc, wc, z) {
    return BigInt(b) * BigInt(Math.min(bc, wc + z)) + BigInt(w) * BigInt(Math.min(wc, bc + z));
}