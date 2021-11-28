function displayTime(){
    var date = moment().format('MMMM Do[,] YYYY');
    var time = moment().format("h:mm a");
    $('#currentDay').html(date);
    $('#currentTime').html(time);

    setInterval(function(){
        displayTime();
    }, 1000);
}



$(document).ready(function(){
    displayTime();

})