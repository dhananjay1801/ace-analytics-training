function pattern(n){
    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < n-i; j++){
            str += ' ';
        }
        for(let j = 0; j < 2*i-1; j++){
            str += '*';
        }
        console.log(str);
    }

    for(let i = n; i > 0; i--){
        let str = "";
        for(let j = 0; j <= n-i-1; j++){
            str += " ";
        }
        for(let j = 0; j < 2*i-1; j++){
            str += "*";
        }
        console.log(str);
    }
}

pattern(5);