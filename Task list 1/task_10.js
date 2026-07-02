function calc_age(date){
    let given_year = date.slice(0, 4);
    let given_month = date.slice(5, 7);
    let given_date = date.slice(8, 10);

    const today = new Date();
    let age = today.getFullYear() - given_year;

    // months in js are 0 indexed
    if(today.getMonth() + 1 < given_month || (today.getMonth() < given_month && today.getDate() < given_date)){
        return age - 1;
    }
    return age;
}

date = "2000-02-29"
console.log(calc_age(date));