function check_unique(arr){
    let set = new Set();
    let res = []

    for(const num of arr){
        set.add(num);
    }

    for(const num of set){
        res.push(num);
    }
    
    return res;
}

let arr = [1,1,2,5,6,6,7]
console.log(check_unique(arr))