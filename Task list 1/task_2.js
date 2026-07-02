function check_string(s){
    if(typeof s === 'string' || s instanceof String){
        return true;
    }
    return false;
}

console.log(check_string(new String("hello")))