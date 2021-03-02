

function reloj(){
    var fechahora =  new Date();
    var days = fechahora.getDay();
    var hours =  fechahora.getHours();
    var minutes = fechahora.getMinutes();
    var seconds =  fechahora.getSeconds();

    if(days < 10 ){
        days = '0' + days;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}


window.onload = function(){
    setInterval(reloj,1000);
}