function pattern(n){

    function helper(){

        for(let i = 1; i <= n; i++){
            let str = "";

            for(let j = 1; j <= n - i; j++){
                str += " ";
            }
            if(i === 1){
                str += "*";
            }
            else if(i === n){
                for(let k = 1; k <= 2*n-1; k++){
                    str += "*";
                }
            }
            else{
                str += "*";

                for (let k = 1; k <= 2 * i - 3; k++){
                    str += " ";
                }
                str += "*";
            }
            console.log(str);
        }
    }
    helper();
    helper();

    for(let i = 0; i < n; i++){
        let str = "";

        for(let j = 1; j <= n-i; j++){

        }

        let spaces= " ".repeat(n - 1);
        console.log(spaces + "*");
    }
}

pattern(10);