function customSort(order, ...arrays){
    let arr = [].concat(...arrays);

    function sort(l, r){
        if(l < r){
            let mid = Math.floor(l + (r - l) / 2);
            sort(l, mid);
            sort(mid + 1, r);
            mergeSort(l, mid, r);
        }
    }

    function mergeSort(l, mid, r){
        let i = l;
        let j = mid + 1;
        let temp = [];

        while(i <= mid && j <= r){
            const condition = order === 'asc' ? arr[i] <= arr[j] : arr[i] >= arr[j];
            if(condition){
                temp.push(arr[i]);
                i++;
            }
            else{
                temp.push(arr[j]);
                j++;
            }
        }

        while(i <= mid){
            temp.push(arr[i]);
            i++;
        }

        while(j <= r){
            temp.push(arr[j]);
            j++;
        }

        for(let k = 0; k < temp.length; k++){
            arr[l + k] = temp[k];
        }
    }
    sort(0, arr.length - 1);
    return arr;
}
arr1 = [4, 19, 73, 2, 45];
arr2 = [1.42, 6.89, 3.14, 9.05, 0.71, 5.53];
arr3 = [105, 4392, 761, 8840, 233, 5067, 914];

let result = customSort("desc", arr1, arr2, arr3);
console.log(result);