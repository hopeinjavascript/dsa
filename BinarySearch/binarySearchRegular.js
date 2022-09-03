const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const answer = binarySearch(arr, 7)
console.log(answer)

function binarySearch(arr, targetElem) {

    const len = arr.length

    if (len === 0)
        return 'array is empty'

    if (!targetElem || typeof targetElem !== "number")
        return 'targetElem is not provided or is not of type number'

    let start = 0
      , end = len - 1

    while (start <= end) {
        let mid = (start + end) / 2
        mid = Math.floor(mid)

        if (targetElem > arr[mid])
            start = mid + 1
        else if (targetElem < arr[mid])
            end = mid - 1
        else if (targetElem === arr[mid])
            return mid
    }

    return 'no matching found!'

}
