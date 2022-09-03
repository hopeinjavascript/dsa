// https://leetcode.com/problems/find-smallest-letter-greater-than-target

const arr = ["c", "f", "j"]
const answer = binarySearch(arr, 'j')
console.log(answer)

function binarySearch(arr, targetElem) {

    const len = arr.length

    if (len === 0)
        return 'array is empty'

    let start = 0
      , end = len - 1

    while (start <= end) {
        let mid = (start + end) / 2
        mid = Math.floor(mid)

        console.log(start, end, mid)

        if (targetElem < arr[mid])
            end = mid - 1
        else
            start = mid + 1
    }

    return arr[start % len]

}
