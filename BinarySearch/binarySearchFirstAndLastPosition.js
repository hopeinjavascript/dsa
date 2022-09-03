const arr = [1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10]
const ans = [-1, -1]
const targetElem = 4
ans[0] = binarySearchFirstAndLastPosition(arr, targetElem, true)
// one interger value (ans) is being returned from the function
ans[1] = binarySearchFirstAndLastPosition(arr, targetElem, false)
console.log(ans)

function binarySearch(arr, targetElem, searchInFirstPart) {

    const len = arr.length

    if (len === 0)
        return 'array is empty'

    if (!targetElem || typeof targetElem !== "number")
        return 'targetElem is not provided or is not of type number'

    let start = 0
      , end = len - 1

    let ans = -1
    // to return a value from the function

    while (start <= end) {
        let mid = (start + end) / 2
        mid = Math.floor(mid)

        if (targetElem > arr[mid])
            start = mid + 1
        else if (targetElem < arr[mid])
            end = mid - 1
        else if (targetElem === arr[mid]) {
            ans = mid

            if (searchInFirstPart)
                end = mid - 1
            else
                start = mid + 1
        }

    }

    return ans

}
