function pattern(n){
    const alphabets = [];
    for(let i = 0; i < n; i++){
        alphabets.push(String.fromCharCode(65 + i));
    }

    for(let i = 0; i < n; i++){
        let str = "";
        for(let j = 0; j < n - i; j++){
            str += alphabets[j];
        }

        console.log(str);
    }

    for(let i = n; i > 0; i--){
        let str = "";
        for(let j = 0; j < n - i + 1; j++){
            str += alphabets[j];
        }
        console.log(str);
    }
}

let n = 10;
pattern(n/2);