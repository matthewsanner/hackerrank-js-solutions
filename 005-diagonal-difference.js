//calculates the absolute difference between the sum of two diagonals in a square matrix

function diagonalDifference(arr) {
    let diagL=0;
    let diagR=0;
    let n=arr.length;
    for (let i=0; i<n; i++){
        diagL+=arr[i][i];
        diagR+=arr[i][n-i-1];
    }
    return Math.abs(diagL - diagR);
} 