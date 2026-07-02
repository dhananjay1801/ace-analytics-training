const btns = document.querySelectorAll(".btns");
const display = document.querySelector(".display");

const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");

let currString = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnText =  btn.innerText;
        const lastChar = currString[currString.length - 1];
        
        if(upper.innerText !== "" && isOperator(btnText)){
            currString = upper.innerText;
            upper.innerText = "";
        }
        if(btnText === "0" && currString === "0"){
            currString = "0";
        }
        else if (btnText === "=") {
            if (currString !== "" && !isOperator(lastChar)) {
                try {
                    const res = String(evaluate(currString)); 
                    upper.innerText = String(res);
                }catch (e) {
                    currString = "Error";
                }
            }
        }
        else if (isOperator(btnText) && isOperator(lastChar)) {
            currString = currString.slice(0, -1) + btnText;
        }
        else{
            currString += btnText;
        }
        lower.innerText = currString;
    });
});

const del = document.querySelector(".btn-del");
del.addEventListener("click", clearDisplay);

const eq = document.querySelector(".btn-eq");

function clearDisplay(){
    currString = "";
    lower.innerText = "0";
    upper.innerText = "";
}

function isOperator(val) {
    return ["+", "-", "*", "/"].includes(val);
}

function evaluate(s){
    const expression = s.match(/(\d+\.?\d*)|([\+\-\*\/])/g);
    if (!expression) return 0;

    let i = 0;
    while(i < expression.length){
        const ch = expression[i];

        if(ch === '*' || ch === '/'){
            const n1 = Number(expression[i - 1]);
            const op = ch;
            const n2 = Number(expression[i + 1]);

            const res = (op === '*') ? n1 * n2 : n1 / n2;

            expression.splice(i - 1, 3, res);
            i--;
        }
        else{
            i++;
        }
    }

    let res = Number(expression[0]);
    for(let i = 1; i < expression.length; i+=2){
        const op = expression[i];
        const num = Number(expression[i + 1]);

        if(op === '+'){
            res += num;
        }
        else if(op === '-'){
            res -= num;
        }
    }
    return res;
}