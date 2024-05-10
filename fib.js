// Iterative fibonacci solution
function fibs(n){
    let numArr = [0]
    let prev = 0
    let curr = 1
    if(n === 0) return []
    if(n === 1) return [0]
    for(let i = 0; i < n - 1; i++){
        numArr.push(curr)
        const temp = curr
        curr += prev
        prev = temp
    }
    return numArr
}

function fibsRec(n, numArr = [], prev = 0, curr = 1){
    if(n === 0) {
        return numArr
    }
    else if(n === 1) {
        return [0, 1].concat(numArr)
    }
    return fibs(n - 1, numArr.concat([curr]), curr, curr + prev)
}

console.log('This is the iterative fibonacci solution: ', fibs(8))
console.log('This is the recursive fibonacci solution: ', fibsRec(8))