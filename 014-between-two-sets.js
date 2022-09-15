//Determines numbers that are factorable by numbers in the first array and are factors of numbers in the second array

function getTotalX(a, b) {
    let validCount = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(function(int) {return i % int == 0})) {
            if (b.every(function(int) {return int % i == 0})) {
                validCount++;
            }
        }
    }
    return validCount;
}