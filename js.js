'use strict';
//Время
function clock() {
    var time = new Date();
    var h = addZero(time.getHours());
    var m = addZero(time.getMinutes());
    var s = addZero(time.getSeconds());
    document.getElementById("time").innerHTML = h + " : " + m + " : " + s;
    window.setTimeout('clock()', 1000);
}
clock();

//0
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



// Дата
function date() {
    let date = new Date().toLocaleString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });;
    document.getElementById("date").innerHTML = date;

}
date();