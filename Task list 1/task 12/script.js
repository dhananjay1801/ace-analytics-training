const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.querySelector('.form')

form.addEventListener("submit",(e) =>{
    validateName(fname);
    validateName(lname);
    validateEmail();
    validatePassword();
    
    let hasErrors = false;
    const errors = document.querySelectorAll(".error")

    errors.forEach(err => {
        if(err.textContent !== ""){
            hasErrors = true
        }
    })

    if (fname.value === "" || lname.value === "" || email.value === "" || password.value === "") {
        hasErrors = true;
    }

    if(hasErrors){
        e.preventDefault();
        alert("Please check for errors before submitting.");
    }
})

function validateName(inputElement){
    const errorEl = document.getElementById(`${inputElement.id}-error`);
    const val = inputElement.value.trim();

    const fieldName = inputElement.id === "fname" ? "First name" : "Last name";

    if (val === "") {
        errorEl.textContent = `${fieldName} is required`;
    } else if (/\d/.test(val)) {
        errorEl.textContent = `${fieldName} cannot contain numbers`;
    } else {
        errorEl.textContent = "";
    }
}

function validateEmail() {
    const errorEl = document.getElementById('email-error');
    const val = email.value.trim();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (val === "") {
        errorEl.textContent = "Email is required.";
    } else if (!emailRegex.test(val)) {
        errorEl.textContent = "Enter a valid email address.";
    } else {
        errorEl.textContent = "";
    }
}

function validatePassword() {
    const errorEl = document.getElementById('password-error');
    const passVal = password.value;
    
    let hasLetter = /[a-zA-Z]/.test(passVal);
    let hasNumber = /[0-9]/.test(passVal);
    let hasSymbol = /[^a-zA-Z0-9\s]/.test(passVal);

    if (passVal.length < 8) {
        errorEl.textContent = "Password must be at least 8 characters";
    } else if (!hasLetter) {
        errorEl.textContent = "Password must have a letter";
    } else if (!hasNumber) {
        errorEl.textContent = "Password must have a number";
    } else if (!hasSymbol) {
        errorEl.textContent = "Password must have a symbol";
    } else {
        errorEl.textContent = "";
    }
}

fname.addEventListener('blur', () => {validateName(fname)});
lname.addEventListener('blur', () => {validateName(lname)});
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);