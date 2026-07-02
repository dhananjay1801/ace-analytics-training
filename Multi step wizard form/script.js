let currStep = 1;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const submit = document.querySelector('.submit');

next.addEventListener('click', () => {
    if (currStep === 1 && !validateStep1()) {
        return;
    }
    if (currStep === 2 && !validateStep2()) {
        return;
    }
    currStep++;
    showStep();
});

prev.addEventListener('click', () => {
    currStep--;
    showStep();
});

const form = document.querySelector('.form');
const table = document.querySelector('.table');
const userForm = document.querySelector('.user-form');

const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');

function setNavButton(button, visible) {
    button.classList.toggle('nav-hidden', !visible);
}

function showStep() {
    form.style.display = 'none';

    step1.style.display = 'none';
    step2.style.display = 'none';
    step3.style.display = 'none';

    if (currStep === 1) {
        table.style.display = "flex";
        form.style.display = 'flex';
        step1.style.display = 'flex';
        userForm.style.display = 'flex';
        setNavButton(prev, false);
        setNavButton(next, true);
        setNavButton(submit, false);
    }
    if (currStep === 2) {
        form.style.display = 'flex';
        step2.style.display = 'flex';
        userForm.style.display = 'flex';
        setNavButton(prev, true);
        setNavButton(next, true);
        setNavButton(submit, false);
    }
    if (currStep === 3) {
        form.style.display = 'flex';
        step3.style.display = 'flex';
        userForm.style.display = 'flex';
        setNavButton(prev, true);
        setNavButton(next, false);
        setNavButton(submit, true);
    }
}
showStep();

const data = [];
const user = document.querySelector('form');

user.addEventListener('submit', (e) => {
    e.preventDefault();

    if (currStep === 3 && !validateStep3()) {
        return;
    }

    saveFormData();
    user.reset();
    editIndex = null;

    currStep = 1;
    showStep();
});

function saveFormData() {
    const formData = new FormData(user);
    const formObj = Object.fromEntries(formData.entries());

    if (editIndex !== null) {
        data[editIndex] = formObj
        editIndex = null;
    }
    else {
        data.push(formObj);
    }
    displayTableData();
}

function displayTableData() {
    const tableBody = document.querySelector('.table-body');
    tableBody.innerHTML = "";

    data.forEach((userData, index) => {
        const row = document.createElement("tr");
        row.classList.add("table-row");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${userData.fname}</td>
            <td>${userData.lname}</td>
            <td>${userData.gender}</td>
            <td>${userData.email}</td>
            <td class="contact-col">${userData.contact === "" ? "" : userData["country-code"]}${userData.contact === "" ? "" : userData.contact}</td>
            <td>${userData.dob}</td>
            <td>${userData.sport}</td>
            <td class="about-col" title='${userData.about}'>${userData.about}</td>
            <td>${userData.hours}</td>
            <td>${userData.ip}</td>
            <td>${userData.zip}</td>
            <td>${userData.money}</td>
            <td>${userData.tnc === "on" ? "Accepted" : "Not Accepted"}</td>
            <td class="edit-del">
                <button class="edit" data-index="${index}">Edit</button>
                <button class="del" data-index="${index}">Delete</button>
            </td>
        `;
        console.log(row.innerHTML)
        tableBody.appendChild(row);
    });
}

function deleteRow(index) {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) {
        return;
    }
    data.splice(index, 1);
    displayTableData();
}

const tableBody = document.querySelector('.table-body');

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        const index = e.target.dataset.index;
        edit(index);
    }

    if (e.target.classList.contains('del')) {
        const index = e.target.dataset.index;
        deleteRow(index);
        displayTableData();
    }
});

let editIndex = null;

function edit(index) {
    editIndex = index;

    const userData = data[index];

    document.querySelector('[name="fname"]').value = userData.fname;
    document.querySelector('[name="lname"]').value = userData.lname;
    document.querySelector('[name="email"]').value = userData.email;
    document.querySelector('[name="country-code"]').value = userData["country-code"];
    document.querySelector('[name="contact"]').value = userData.contact;
    document.querySelector('[name="dob"]').value = userData.dob;
    document.querySelector('[name="zip"]').value = userData.zip;
    document.querySelector('[name="ip"]').value = userData.ip;
    document.querySelector('[name="sport"]').value = userData.sport;
    document.querySelector('[name="about"]').value = userData.about;
    document.querySelector('[name="hours"]').value = userData.hours;
    document.querySelector('[name="money"]').value = userData.money;

    document.querySelector(
        `[name="gender"][value="${userData.gender}"]`
    ).checked = true;

    currStep = 1;
    showStep();
}

function validateStep1() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const gender = document.querySelector('input[name="gender"]:checked');
    let isValid = true;
    fname.style.border = "";
    lname.style.border = "";

    if (!fname.value.trim()) {
        showError(fname, "First Name is required");
        isValid = false;
    }

    if (!lname.value.trim()) {
        showError(lname, "Last Name is required");
        isValid = false;
    }

    if (!gender) {
        alert("Please select Gender");
        isValid = false;
    }

    return isValid;
}

function validateStep2() {
    const email = document.getElementById('email');
    const countryCode = document.getElementById('country-code');
    const contact = document.getElementById('contact');
    const dob = document.getElementById('dob');
    const zip = document.getElementById('zip');
    const ip = document.getElementById('ip');

    let isValid = true;

    [email, countryCode, contact, dob, zip, ip].forEach(field => {
        field.style.border = "";
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, "Email is required");
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, "Invalid Email");
        isValid = false;
    }

    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!dob.value.trim()) {
        showError(dob, "Date of Birth is required");
        isValid = false;
    } else if (!dobRegex.test(dob.value.trim())) {
        showError(dob, "Enter date in (MM/DD/YYYY) format");
        isValid = false;
    }

    const contactRegex = /^\d{10}$/;
    if (contact.value.trim() && !contactRegex.test(contact.value.trim())) {
        showError(contact, "Enter 10-digit Contact No.");
        isValid = false;
    }

    const zipRegex = /^\d{6}$/;

    if (zip.value.trim() && !zipRegex.test(zip.value.trim())) {
        showError(zip, "ZIP must be 6 digits");
        isValid = false;
    }

    const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/;

    if (ip.value.trim() && !ipRegex.test(ip.value.trim())) {
        showError(ip, "Invalid IP Address");
        isValid = false;
    }

    return isValid;
}

function validateStep3() {
    const sport = document.getElementById("sport");
    const hours = document.getElementById("hours");
    const money = document.getElementById("money");
    const tnc = document.getElementById("tnc");
    const tncError = document.getElementById("tnc-error");

    tncError.textContent = "";
    sport.style.border = "";

    let isValid = true;

    if (!sport.value) {
        alert("Please select your Favorite Sport.");
        isValid = false;
    }

    const hoursRegex = /^\d{2}$/;
    if (hours.value.trim() && !hoursRegex.test(hours.value.trim())) {
        showError(hours, "Hours must be 2 digits. (Example: 05, 23)");
        isValid = false;
    }

    const moneyRegex = /^[\d,]+(\.\d{2})?$/;
    if (money.value.trim() && !moneyRegex.test(money.value.trim())) {
        showError(money, "Invalid Amount");
        isValid = false
    }

    if (!tnc.checked) {
        tncError.textContent = "Please check the box before submitting.";
        isValid = false;
    }
    return isValid;
}

const tnc = document.getElementById("tnc");
const tncError = document.getElementById("tnc-error");

tnc.addEventListener("change", () => {
    if (tnc.checked) {
        tncError.textContent = "";
    }
});

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

function allowOnlyLetters(e) {
    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
}

fname.addEventListener("input", allowOnlyLetters);
lname.addEventListener("input", allowOnlyLetters);

function showError(field, message) {
    field.classList.add("error");

    const error = field.parentElement.querySelector(".field-error");

    if (error) {
        error.textContent = message;
    }
}

function clearError(field) {
    field.classList.remove("error");

    const error = field.parentElement.querySelector(".field-error");

    if (error) {
        error.textContent = "";
    }
}

document.querySelectorAll("input, textarea, select").forEach(field => {
    field.addEventListener("input", () => {
        clearError(field);
    });

    field.addEventListener("change", () => {
        clearError(field);
    });
});

const dob = document.getElementById("dob");

dob.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    value = value.substring(0, 8);

    if (value.length > 4) {
        value = value.replace(/^(\d{2})(\d{2})(\d{0,4}).*/, "$1/$2/$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,2}).*/, "$1/$2");
    }

    e.target.value = value;
});

const moneyInput = document.getElementById('money');

moneyInput.addEventListener('input', function (e) {
  let inputVal = this.value.replace(/[^\d.]/g, '');

  const decimalCount = (inputVal.match(/\./g) || []).length;
  if (decimalCount > 1) {
    inputVal = inputVal.slice(0, -1);
  }

  const parts = inputVal.split('.');
  const wholeNumber = parts[0];
  const decimal = parts[1];

  let formattedValue = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (decimal !== undefined) {
    formattedValue += '.' + decimal.substring(0, 2);
  }

  this.value = formattedValue;
});

fname.addEventListener('blur', () => {
    fname.style.border = "";
    if (!fname.value.trim()) {
        showError(fname, "First Name is required");
    }
});

lname.addEventListener('blur', () => {
    lname.style.border = "";
    if (!lname.value.trim()) {
        showError(lname, "Last Name is required");
    }
});

const email = document.getElementById("email");

email.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, "Email is required");
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, "Invalid Email");
    }
});

dob.addEventListener('blur', () => {
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!dob.value.trim()) {
        showError(dob, "Date of Birth is required");
    } else if (!dobRegex.test(dob.value.trim())) {
        showError(dob, "Enter date in (MM/DD/YYYY) format");
    }
});