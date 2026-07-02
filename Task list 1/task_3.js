function check_float(n){
    if(n % 1 !== 0 && typeof n == "number"){
        return true;
    }
    return false;
}

console.log(check_float(3.5))