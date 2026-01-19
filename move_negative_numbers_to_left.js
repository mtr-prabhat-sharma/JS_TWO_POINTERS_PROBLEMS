let arr = [1, -2, 3, -4, -5, 6];
function demo(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i] < 0){
            i++;
        } else if(arr[j] >= 0){
            j--;
        } else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return arr;
}

console.log(demo(arr))
