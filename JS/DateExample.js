let date = new Date()

function showYear(){
    let year = date.getFullYear()
    document.getElementById('ldate').innerHTML = year
}

function showMonth(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    let monthActual = month[date.getMonth()]
    document.getElementById('ldate').innerHTML = monthActual
}

function showDay() {
    let day = date.getDay();
    document.getElementById('ldate').innerHTML = day
}

function showDate() {
    let dateOne = date
    document.getElementById('ldate').innerHTML = dateOne
}

function showHour(){
    
}

function showDateHour(){
    document.getElementById('ldate').innerHTML = today
}

function formatDate(date, format) {	

}

function formatDate(date, format) {    
    const map = {        
        mm: date.getMonth() + 1,        
        dd: date.getDate(),        
        yy: date.getFullYear().toString().slice(-2),        
        yyyy: date.getFullYear()    
    }    
    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}