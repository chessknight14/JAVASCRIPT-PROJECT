//         ________________________________CLOCK'S FUNCTION _________________________________

var hour = document.getElementById("hour"); //getting the hour, minute and second id from html
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time(){
        var date_now = new Date();
        var hr = date_now.getHours();  //date and get hours, minutes, and seconds
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        if(hr < 10){
            hr = "0" + hr;
        }
        if(min < 10){
            min = "0" + min;  //adding the 0 so it's 02:30 instead of 2:30
        }
        if(sec < 10){
            sec = "0" + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;  //constantly updates it?? (research)
        seconds.textContent = sec;

    }, 1000
);

//____________________________________