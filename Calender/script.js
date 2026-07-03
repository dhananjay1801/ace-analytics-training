let currMonth = new Date().getMonth();
let currYear = new Date().getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const today = new Date();

const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

function bgMapping() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url("./assests/${currMonth + 1}.jpg")`
}

bgMapping();

const dates = document.querySelector('.dates');


function renderCalender() {
    dates.innerHTML = "";
    const firstDay = new Date(currYear, currMonth, 1).getDay();
    const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();

    const prevMonthDays = new Date(currYear, currMonth, 0).getDate();
    const startPrev = prevMonthDays - firstDay + 1;

    const totalCells = firstDay + daysInMonth;
    const remaining = (42 - totalCells) % 7;

    // fill prev month's dates
    for (let i = startPrev; i <= prevMonthDays; i++) {
        const day = document.createElement("div");
        
        day.className = "day inactive";
        day.textContent = i;

        dates.appendChild(day);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;

        if (i === todayDate && currMonth === todayMonth && currYear === todayYear) {
            day.classList.add('today');
        }
        const weekday = new Date(currYear, currMonth, i).getDay();

        if (weekday === 0) {
            day.classList.add("holiday");
        }

        dates.appendChild(day)
    }

    for(let i = 1; i <= remaining; i++){
        const day = document.createElement('div');

        day.className = "day inactive";
        day.innerText = i;

        dates.appendChild(day);
    }
}

renderCalender();

const next = document.getElementById('next')
next.addEventListener('click', () => {
    currMonth++;
    if (currMonth > 11) {
        currMonth = 0;
        currYear++;
    }
    monthSelect.value = currMonth;
    yearSelect.value = currYear;
    bgMapping();
    renderCalender();
})

const prev = document.getElementById('prev')
prev.addEventListener('click', () => {
    currMonth--;
    if (currMonth < 0) {
        currMonth = 11;
        currYear--;
    }
    monthSelect.value = currMonth;
    yearSelect.value = currYear;
    bgMapping();
    renderCalender();
})

const todayBtn = document.getElementById('today');
todayBtn.addEventListener('click', () => {
    currMonth = todayMonth;
    currYear = todayYear;
    monthSelect.value = currMonth;
    yearSelect.value = currYear;
    bgMapping();
    renderCalender();
})

const monthSelect = document.getElementById("select-month");
const yearSelect = document.getElementById("select-year");

months.forEach((month, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = month;

    monthSelect.appendChild(option);
});

for (let year = 1950; year <= 2050; year++) {
    const option = document.createElement('option');

    option.value = year;
    option.textContent = year;

    yearSelect.appendChild(option);
}

monthSelect.value = currMonth;
yearSelect.value = currYear;

monthSelect.addEventListener('change', () => {
    currMonth = Number(monthSelect.value);
    bgMapping();
    renderCalender();
})

yearSelect.addEventListener('change', () => {
    currYear = Number(yearSelect.value);
    bgMapping();
    renderCalender();
})
