const arr = [1, 5, 2, 1] //also known as bitonic array
const ans = binarySearchMountain(arr)
console.log(ans)

function binarySearchMountain(arr) {

    const len = arr.length

    let start = 0
      , end = len - 1

    while (start < end) {
        let mid = (start + end) / 2
        mid = Math.floor(mid)

        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
}
