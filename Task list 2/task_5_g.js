function pattern(n){
    num = 1

    for(let i = 1; i <= n; i++){
        let str = [];

        for(let j = 1; j <= i; j++){
            if(j === 1 || j === i || i === n){
                str.push(num);
            }
            else{
                str.push("  ");
            }
            num++;
        }
        console.log(str.join(" "));
    }
}

pattern(5);