let arr = [2 , 3 , -5 , -2 , 4]
let max = 0

function Output (arr) {
    for(let i = 0 ; i < arr.length ; i++) {
    let result = arr[i] * arr[i+1];
    if (result > max) {
        max = result
    }
}
    console.log(max)
}

Output(arr)


