// Finds the surface area of a cube made up of 1x1 cubes defined by an array of integer arrays, where each subarray defines a new row and integers define the height at that location.

function surfaceArea(A) {
    // adds top and bottom
    let surfaceArea = 2 * A.length * A[0].length;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[0].length; j++) {
            // adds front and back sides if exposed
            if (i == 0 || i == A.length - 1) {
                surfaceArea += A[i][j]
                // for edge case where only one row add again
                if (A.length == 1) {
                    surfaceArea += A[i][j]
                }
            }
            // adds left and right sides if exposed
            if (j == 0 || j == A[0].length - 1) {
                surfaceArea += A[i][j]
                // for edge case where only one column add again
                if (A[0].length == 1) {
                    surfaceArea += A[i][j]
                }
            }
            // interior sides
            // adds differences along rows
            if (i < A.length - 1) {
                surfaceArea += Math.abs(A[i][j] - A[i + 1][j])
            }
            // adds differences along columns
            if (j < A[0].length - 1) {
                surfaceArea += Math.abs(A[i][j] - A[i][j + 1])
            }
        }
    }
    return surfaceArea;
}