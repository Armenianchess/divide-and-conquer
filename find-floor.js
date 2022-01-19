let arr = [1, 2, 8, 10, 10, 12, 19] // 19
let target = 20

function findFloor(arr, target) {

    let startIdx = 0;
    let endIdx = arr.length - 1

    let midIdx;
    let midVal;
    let result;

    while (startIdx <= endIdx) {
        midIdx = Math.floor((startIdx + endIdx) / 2)
        midVal = arr[midIdx]

        if (midVal == target - 1) {
            result = midVal
            break;
        } else if (midVal > target - 1) {
            endIdx = midIdx - 1
        } else if (midVal < target - 1) {
            startIdx = midIdx + 1
        }
    }
    return result
}

console.log(findFloor(arr, target))
module.exports = findFloor


/*
findFloor([1,2,8,10,10,12,19], 9) // 8

return the n from the arr that is closest to the 
Math.floor(of our target number) in this case its 9 
and in the arr when flooring 9 the closest thing is 8




*/