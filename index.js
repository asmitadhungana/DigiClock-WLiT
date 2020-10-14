var weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var month =['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function clock(){
    // setting up my variables
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    var daytoday = today.getDay();
    var date = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();

    //setting the AM and PM meridiem | 12-hour format
    var day = h<11 ? 'AM': 'PM'; 
    // adding leading zeros to them
    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    // writing it down in the document
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;
    document.getElementById(''+weekdays[daytoday]+'').style.color = '#56B5C4';
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year;

}
var inter = setInterval(clock,400);





