let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

function demo(arr1,arr2){
    let i = 0;
    let j = 0;
    let res = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
     while (i < arr1.length) {
        res.push(arr1[i++]);
    }
    while (j < arr2.length) {
        res.push(arr2[j++]);
    }
    return res;
}

console.log(demo(arr1,arr2))
