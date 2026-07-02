function pattern(n){
    const alphabets = [];
    for(let i = 0; i < n; i++){
        alphabets.push(String.fromCharCode(65 + i));
    }

    for(let i = 0; i < n; i++){
        let str = "";
        let char = alphabets[i];

        for(let j = 0; j < n - 1 - i; j++){
            str += " ";
        }
        if(i === 0){
            str += char;
        }
        else{
            str += char;
            for (let k = 0; k < (2*i)-1; k++){
                str += " ";
            }
            str += char;
        }
        console.log(str);
        
    }

    for(let i = n - 2; i >= 0; i--){
        let str = "";
        let char = alphabets[i];

        for(let j = 0; j < n - 1 - i; j++){
            str += " ";
        }
        if (i === 0){
            str += char;
        }
        else{
            str += char;

            for (let k = 0; k < 2 * i - 1; k++){
                str += " ";
            }
            str += char;
        }
        console.log(str);
    }
    
}

pattern(5);