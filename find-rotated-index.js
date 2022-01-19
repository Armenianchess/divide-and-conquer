let arr = [6, 7, 8, 9, 1, 2, 3, 4] // 2
let target = 8

// we need to make this array an ordered array
// as of now its a fragmented ordered array 
// where one part is 1-4 and other part is 6-9
// in order to unfragment the arr we need to find the lowest member of the arr aka 
// the start of the arr which is 1 in our case

function findRotatedIndex(arr, target) {

    let startIdx = 0;
    // 0
    let endIdx = arr.length - 1
    // 6

    let midIdx;
    let midVal;
    let beforeMidVal;
    let afterMidVal;
    let splitIdx;
    let rotatedArr;

    while (startIdx <= endIdx) {
        // 1        <= 6
        // 4        <= 6
        // 4        <= 4
        midIdx = Math.floor((startIdx + endIdx) / 2)
        // 3
        // 5
        // 4
        midVal = arr[midIdx]
        // 9
        // 2
        // 1
        beforeMidVal = arr[midIdx - 1]
        // 8
        // 1
        // 9

        afterMidVal = arr[midIdx + 1]
        // 1
        // 3
        // 2

        if (midVal < beforeMidVal && midVal < afterMidVal) {
            //   9    < 8 NOT TRUE
            //  2     < 1 NOT TRUE
            // 1      < 9 TRUE  &&      1 < 2 TRUE
            splitIdx = midIdx
            // 4
            break;
        } else if (beforeMidVal > afterMidVal) {
            // 8                 > 1 TRUE
            // 1                 > 3 NOT TRUE
            startIdx = midIdx + 1
            // 4
        } else if (beforeMidVal < afterMidVal) {
            //      1           < 3 TRUE
            endIdx = midIdx - 1
            // 4
        }


    }
    let originalArr = arr;
    rotatedArr = arr.splice(splitIdx)
    // [1,2,3,4]
    console.log(rotatedArr, arr)


    let arr1 = rotatedArr;
    // [1,2,3,4]
    let arr2 = arr
    // arr has been mutated and is now [6,7,8,9]
    let correctArr;
    let targetIdx

    if (arr1[arr1.length - 1] > target && arr1[0] < target) {
        // 3                  > 8 NOT TRUE     
        correctArr = arr1
    } else {
        correctArr = arr2
    }

    startIdx = 0
    // 0
    endIdx = correctArr.length - 1
    // 3

    midIdx;

    midVal;

    while (startIdx <= endIdx) {
        // 0        <= 3
        // 2        <= 3
        midIdx = Math.floor((startIdx + endIdx) / 2)
        // 1
        // 2
        midVal = correctArr[midIdx]
        // 7
        // 8
        if (midVal == target) {
            // 7  == 8 NOT TRUE
            // 8 == 8 TRUE
            targetIdx = midIdx
            // 2
            break;
        } else if (midVal > correctArr[startIdx]) {
            // 7 > 6 TRUE
            startIdx = midIdx + 1
            // 2
        } else if (midVal < correctArr[startIdx]) {
            endIdx = midIdx - 1
        }
    }

    if (correctArr[0] == originalArr[0]) {
        return targetIdx
    } else {
        return targetIdx + arr.length
    }
}

console.log(findRotatedIndex(arr, target)) // 1






module.exports = findRotatedIndex


