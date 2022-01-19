let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let val = 4

function binarySearch(arr, val) {

    let leftIdx = 0; // 0
    let rightIdx = arr.length - 1; // 10

    while (leftIdx <= rightIdx) {
        //      0      <= 10     TRUE
        //      0      <= 4     TRUE
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        //  middleIdx = 5 
        //  middleIdx = 2
        let middleVal = arr[middleIdx];
        // middleVal = arr[5] = 5
        // middleVal = arr[4] = 4

        if (middleVal < val) {
            //  5         < 4   NOT TRUE
            //  4         < 4   NOT TRUE
            leftIdx = middleIdx + 1;

        } else if (middleVal > val) {
            //           5        >   4    TRUE
            //           4        >   4    TRUE
            rightIdx = middleIdx - 1;
            //   rightIdx = 4
        } else {

            return middleIdx;
            // 4
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}

console.log(binarySearch(arr, val))

