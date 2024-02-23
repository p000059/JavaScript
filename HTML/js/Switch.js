var dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]

showWeek();

function showWeek() {

    let select = document.querySelector('select');

    for (let i in dayWeek) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = dayWeek[i];
        select.appendChild(option);
    }
}

function registerWeekDay() {

    let weekDay = document.getElementById('weekDay').value;
    return weekDay;
}

function showWeekDayChoice() {

    document.getElementById('dayWeek').innerHTML = registerWeekDay();
}

function clearFields() {
    document.getElementById('weekDay').innerHTML = "";
}