let arr = [7, 9, 11, 12, 5] // 4

function findRotationCount(arr) {
    let startIdx = 0;
    let endIdx = arr.length - 1

    let midIdx;
    let midVal;
    let beforeMidVal;
    let afterMidVal;
    let targetIdx;

    while (startIdx <= endIdx) {
        //   0      <= 1      
        midIdx = Math.floor((startIdx + endIdx) / 2)
        // 1
        midVal = arr[midIdx]
        // 11
        beforeMidVal = arr[midIdx - 1]
        // 9
        afterMidVal = arr[midIdx + 1]
        // 12



        if (midVal < beforeMidVal && midVal < afterMidVal) {
            // 11 < 9 NOT TRUE
            targetIdx = midIdx

            break;
        } else if (beforeMidVal > afterMidVal) {
            //          9 > 12 NOT TRUE
            startIdx = midIdx + 1
        } else if (beforeMidVal < afterMidVal) {
            //          12 > 9 TRUE
            endIdx = midIdx - 1
            //  1
        }


        if (afterMidVal == undefined && arr[arr.length - 1] == midVal) {
            //  12          == undefined NOT TRUE
            afterMidVal = arr[0]
        } else if (beforeMidVal == undefined && arr[0] == midVal) {
            //     9 == undefined NOT TRUE
            beforeMidVal = arr[arr.length - 1]
        }


    }
    return targetIdx



}

console.log(findRotationCount(arr))