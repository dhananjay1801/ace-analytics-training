function validParenthesis(s) {
    st = []

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if(!isParenthesis(ch)){
            continue;
        }
        if (st.length !== 0 && ch === ')' && st[st.length - 1] === '(') {
            st.pop();
        }
        else if (st.length !== 0 && ch === ']' && st[st.length - 1] === '[') {
            st.pop();
        }
        else if (st.length !== 0 && ch === '}' && st[st.length - 1] === '{') {
            st.pop();
        }
        else {
            st.push(ch);
        }
    }
    return st.length === 0;
}

function isParenthesis(char) {
    return char === '(' || char === ')' || char === '[' || char === ']' || char === '{' || char === '}';
}

const s = "hello world";
console.log(validParenthesis(s));