function grp_elements(arr, criterion){
    const result = [...arr];
    let l = 0;
    let r = result.length - 1;

    while(l < r){
        while(l < r && criterion(result[l])){
            l++;
        }
        while(l < r && !criterion(result[r])){
            r--;
        }

        if(l < r){
            let temp = result[l];
            result[l] = result[r];
            result[r] = temp;
            l++;
            r--;
        }
    }
    return result;
}

const arr = [42, 7, 89, 23, 56, 12, 94, 31, 68, 5];
const result = grp_elements(arr, (num) => num > 50);
console.log(result);