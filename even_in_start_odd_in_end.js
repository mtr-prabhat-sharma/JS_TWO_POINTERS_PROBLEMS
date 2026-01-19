let arr = [3, 1, 2, 4];
function demo(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i] % 2 === 0){
            i++;
        } else if(arr[j] % 2 !== 0){
            j--;
        } else {
            [arr[i],arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return arr;
}

console.log(demo(arr)); // [ 4, 2, 1, 3 ]
