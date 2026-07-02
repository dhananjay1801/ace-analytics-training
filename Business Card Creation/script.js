
const standardCard = document.querySelector(".standard");
const form = document.querySelector(".standard-form");

const companyInput = document.getElementById("company-input");
const websiteInput = document.getElementById("website-input");
const nameInput = document.getElementById("name-input");
const designationInput = document.getElementById("designation-input");
const phoneInput = document.getElementById("phone-input");
const emailInput = document.getElementById("email-input");

const previewCompany = document.getElementById("preview-company");
const previewWebsite = document.getElementById("preview-website");
const previewName = document.getElementById("preview-name");
const previewDesignation = document.getElementById("preview-designation");
const previewPhone = document.getElementById("preview-phone");
const previewEmail = document.getElementById("preview-email");

standardCard.addEventListener("click", () => {
    form.classList.remove("hidden");
});

companyInput.addEventListener("input", function () {
    previewCompany.textContent = this.value.trim() || "Company Name";
});

websiteInput.addEventListener("input", function () {
    previewWebsite.innerHTML =
        `<i class="fa-solid fa-globe"></i> ${this.value.trim() || "www.example.com"}`;
});

nameInput.addEventListener("input", function () {
    previewName.textContent = this.value.trim() || "Your Name";
});

designationInput.addEventListener("input", function () {
    previewDesignation.textContent =
        this.value.trim() || "Your Designation";
});

phoneInput.addEventListener("input", function () {
    previewPhone.innerHTML =
        `<i class="fa-solid fa-phone"></i> Contact: ${this.value.trim() || "+91 9876543210"}`;
});

emailInput.addEventListener("input", function () {
    previewEmail.innerHTML =
        `<i class="fa-solid fa-envelope"></i> Email: ${this.value.trim() || "john@example.com"}`;
});

const cleanCaption = document.getElementById("clean-caption");
const left = document.getElementById("left");
const right = document.getElementById("right");

standardCard.addEventListener("click", () => {
    form.classList.remove("hidden");

    cleanCaption.style.display = "none";

    left.style.flex = "1";
    right.style.flex = "1";
});

const cleanCard = document.getElementById("clean-card");

standardCard.addEventListener("click", () => {
    cleanCard.style.display = "none";
    cleanCaption.style.display = "none";
    form.classList.remove("hidden");
});

const previewLogos = document.querySelectorAll(".preview-logo");
const logoInput = document.getElementById("logo");

logoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        previewLogos.forEach(logo => {
            logo.src = e.target.result;
        });

    };

    reader.readAsDataURL(file);

});

const previewCompanies = document.querySelectorAll(".preview-company");
companyInput.addEventListener("input", function () {
    previewCompanies.forEach(company => {
        company.textContent = this.value.trim() || "Company Name";
    });
});

const downloadBtn = document.getElementById("download-btn-pdf-std");
const businessCard = document.getElementById("business-card-std");

document.getElementById("download-btn-pdf-std").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;

    const front = document.querySelector(".std-front-card");
    const back = document.querySelector(".std-back-card");

    const backWasHidden = back.classList.contains("hidden");

    back.classList.remove("hidden");

    const pdf = new jsPDF("landscape", "px", [400, 200]);

    const frontCanvas = await html2canvas(front, {
        useCORS: true,
        scale: 2,
        backgroundColor: null
    });

    const frontImg = frontCanvas.toDataURL("image/png");
    pdf.addImage(frontImg, "PNG", 0, 0, 400, 200);

    pdf.addPage();

    const backCanvas = await html2canvas(back, {
        useCORS: true,
        scale: 2,
        backgroundColor: null
    });

    const backImg = backCanvas.toDataURL("image/png");
    pdf.addImage(backImg, "PNG", 0, 0, 400, 200);

    if (backWasHidden) back.classList.add("hidden");

    pdf.save("standard-business-card.pdf");
});

const stdFront = document.querySelector(".std-front-card");
const stdBack = document.querySelector(".std-back-card");
const stdForm = document.querySelector(".std-form-div");

const cleanFront = document.querySelector(".clean-front-card");
const cleanBack = document.querySelector(".clean-back-card");
const cleanForm = document.querySelector(".clean-form-div");

const stdCaption = document.getElementById("std-caption");

const stdDownload = document.querySelector(".download-std");
const cleanDownload = document.querySelector(".download-clean");



stdFront.addEventListener("click", () => {

    cleanFront.classList.add("hidden");
    cleanBack.classList.add("hidden");
    cleanForm.classList.add("hidden");
    cleanCaption.classList.add("hidden");
    cleanDownload.classList.add("hidden");

    stdBack.classList.remove("hidden");
    stdForm.classList.remove("hidden");
    stdDownload.classList.remove("hidden");

    stdCaption.querySelector(".title").style.display = "none";
    stdCaption.querySelector(".subtitle").style.display = "none";

});



cleanFront.addEventListener("mouseup", () => {
    isEditMode = true; 

    stdFront.classList.add("hidden");
    stdBack.classList.add("hidden");
    stdForm.classList.add("hidden");
    stdCaption.classList.add("hidden");
    stdDownload.classList.add("hidden");

    cleanBack.classList.remove("hidden");
    cleanForm.classList.remove("hidden");
    cleanDownload.classList.remove("hidden");

    cleanCaption.querySelector(".title").style.display = "none";
    cleanCaption.querySelector(".subtitle").style.display = "none";

    setEditMode(true);

});


const addressInput = document.getElementById("address-input");
const previewAddress = document.querySelector(".preview-address");

addressInput.addEventListener("input", function () {
    previewAddress.textContent =
        this.value.trim() || "Address";
});


const cleanAddressInput = document.getElementById("address-input-clean");
const cleanPreviewAddress = document.querySelector(".clean-preview-address");

cleanAddressInput.addEventListener("input", function () {
    cleanPreviewAddress.textContent =
        this.value.trim() || "Address";
});


// drag logic

let activeEl = null;
let offsetX = 0;
let offsetY = 0;

function getCard(el) {
    return el.closest(".clean");
}

document.querySelectorAll(".draggable").forEach(el => {
    el.addEventListener("mousedown", (e) => {
        if(!editMode) return;

        activeEl = el;

        const rect = el.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        el.style.position = "absolute";
        el.style.zIndex = 999;
    });
});

document.addEventListener("mousemove", (e) => {
    if (!activeEl) return;

    const card = getCard(activeEl);
    const cardRect = card.getBoundingClientRect();

    const elRect = activeEl.getBoundingClientRect();

    let x = e.clientX - cardRect.left - offsetX;
    let y = e.clientY - cardRect.top - offsetY;

    // CLAMP (PREVENT GOING OUTSIDE)
    const maxX = cardRect.width - elRect.width;
    const maxY = cardRect.height - elRect.height;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    activeEl.style.left = x + "px";
    activeEl.style.top = y + "px";
});

document.addEventListener("mouseup", () => {
    if (activeEl) activeEl.style.zIndex = "";
    activeEl = null;
});



function bindInput(inputId, dataId, selector = ".text") {
    const input = document.getElementById(inputId);

    input.addEventListener("input", (e) => {
        const el = document.querySelector(`[data-id="${dataId}"] ${selector}`);

        if (el) {
            el.innerText = e.target.value;
        }
    });
}

document.getElementById("bg-clean").addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const bg = event.target.result;

        const front = document.querySelector(".clean-front-card");
        const back = document.querySelector(".clean-back-card");

        front.style.backgroundImage = `url(${bg})`;
        front.style.backgroundSize = "cover";
        front.style.backgroundPosition = "center";

        back.style.backgroundImage = `url(${bg})`;
        back.style.backgroundSize = "cover";
        back.style.backgroundPosition = "center";
    };

    reader.readAsDataURL(file);
});

let editMode = false;

function toggleEdit() {
    editMode = !editMode;

    document.querySelectorAll(".draggable").forEach(el => {
        el.style.pointerEvents = editMode ? "auto" : "none";
    });
}

function setEditMode(state) {
    editMode = state;

    document.querySelectorAll(".draggable").forEach(el => {
        el.style.pointerEvents = state ? "auto" : "none";
        el.style.cursor = state ? "move" : "default";
    });
}

const colorPicker = document.getElementById("fontColor");

colorPicker.addEventListener("input", (e) => {
    const color = e.target.value;

    document.querySelectorAll(".clean-front-card, .clean-back-card")
        .forEach(card => {
            card.querySelectorAll("*").forEach(el => {
                el.style.color = color;
            });
        });
});

function bindCleanLive(inputId, dataId, type = "text", defaultValue = "") {
    const input = document.getElementById(inputId);

    input.addEventListener("input", (e) => {
        const value = e.target.value.trim() || defaultValue;

        document.querySelectorAll(`[data-id="${dataId}"]`).forEach(el => {

            if (type === "html") {
                el.innerHTML = value;
            }

            else if (type === "icon-text") {
                // keeps icon + text
                const icon = el.querySelector("i")?.outerHTML || "";
                el.innerHTML = `${icon} ${value}`;
            }

            else {
                el.textContent = value;
            }
        });
    });
}
bindCleanLive("name-input-clean", "name", "text", "Your Name");
bindCleanLive("designation-input-clean", "designation", "text", "Your Designation");
bindCleanLive("company-input-clean", "company-name", "text", "Company Name");
bindCleanLive("website-input-clean", "website", "icon-text", "www.example.com");
bindCleanLive("phone-input-clean", "phone", "icon-text", "+91 9876543210");
bindCleanLive("email-input-clean", "email", "icon-text", "john@example.com");
bindCleanLive("address-input-clean", "address", "text", "Address");
bindCleanLive("company-input-clean", "company-name-back", "text", "Company Name");


document.getElementById("download-btn-pdf-clean").addEventListener("click", async () => {
    const { jsPDF } = window.jspdf;

    const front = document.querySelector(".clean-front-card");
    const back = document.querySelector(".clean-back-card");

    const backWasHidden = back.classList.contains("hidden");
    back.classList.remove("hidden");

    const pdf = new jsPDF("landscape", "px", [400, 200]);

    const frontCanvas = await html2canvas(front, {
        useCORS: true,
        scale: 2
    });

    const frontImg = frontCanvas.toDataURL("image/png");
    pdf.addImage(frontImg, "PNG", 0, 0, 400, 200);

    pdf.addPage();

    const backCanvas = await html2canvas(back, {
        useCORS: true,
        scale: 2
    });

    const backImg = backCanvas.toDataURL("image/png");
    pdf.addImage(backImg, "PNG", 0, 0, 400, 200);

    if (backWasHidden) back.classList.add("hidden");

    pdf.save("business-card-custom.pdf");
});

const logoInputClean = document.getElementById("logo-clean");

logoInputClean.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        const logos = document.querySelectorAll(".clean-preview-logo");

        logos.forEach(img => {
            img.src = e.target.result;
        });
    };

    reader.readAsDataURL(file);
});