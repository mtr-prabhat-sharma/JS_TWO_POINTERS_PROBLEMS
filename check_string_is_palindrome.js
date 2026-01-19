let s = "No lemon, no melon";
function demo(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let i = 0;
    let j = s.length - 1;
    while(i < j){
       if(s[i] !== s[j]){
           return false;
       }
        i++;
        j--;
    }
    return true;
}

console.log(demo(s))
