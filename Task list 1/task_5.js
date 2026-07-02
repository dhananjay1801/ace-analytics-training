function divisibility(arr){
    const res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            res[i] = false;
        }
        else{
            res[i] = true;
        }
    }
    return res;
}

let arr = [2,4,61,83,42];

console.log((divisibility(arr)));