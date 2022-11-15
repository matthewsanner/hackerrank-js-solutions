// Determines how many problems in a workbook qualify as special problems- problems that share a number with the page number they are on, given that k equals the max problems per page, n is the number of chapters, and arr contains the number of problems in each chapter. When a chapter ends, the next chapter's problems begin on a new page.

function workbook(n, k, arr) {
    let specProbs = 0;
    let pageNum = 0;
    for (let chap = 0; chap < n; chap++) {
        for (let probNum = 1; probNum <= arr[chap]; probNum++) {
            if (k == 1 || probNum % k == 1) {
                pageNum++;
            }
            if (probNum == pageNum) {
                specProbs++;
            }
        }
    }
    return specProbs;
}