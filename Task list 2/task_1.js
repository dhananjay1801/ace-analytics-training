function customFilter(arr, callback){
    const filteredArr = [];

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(customFilter(arr, (num) => num % 2 != 0))
