function mergeSort(arr){
    const arrLength = arr.length;

    if(arrLength === 1) return arr;

    // sort left and right halves of the array recursively
    let leftArr = mergeSort(arr.slice(0, arrLength / 2))
    let rightArr = mergeSort(arr.slice(arrLength/2))

    // merge sorted arrays
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }
        else{
            sortedArr.push(rightArr.shift())
        }
    }
    
    // combine the remaining elements
    if(leftArr.length){
        sortedArr.push(...leftArr)
    }
    else{
        sortedArr.push(...rightArr)
    }
    return sortedArr;
}


console.log('This array , [3, 5, 9, 10, 21, 2, 4, 7, 1, 6, 15], has been sorted via mergesort algo ', mergeSort([3, 5, 9, 10, 21, 2, 4, 7, 1, 6, 15]));