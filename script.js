
function displayTime(){
    
    // new Date() is a inbuilt data type of javascript allowing to work with dates and times
        var dateTime = new Date();

    // Everytime I now reference my variable "dateTime", it will access the "new Date() inbuilt data"
        var hrs = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();

        // The Variable defined as "session" will interact with the HTML documment that contains an id called "id=session" which determines if the clock is AM or PM
        var session = document.getElementById('session');

        if(hrs >= 12) {
            session.innerHTML = "PM";
        }
        else{
            session.innerHTML = "AM";
        }
        if(hrs > 12){
            hrs = hrs - 12;
        }

        document.getElementById('hours').innerHTML = hrs;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;


}

setinterval(displayTime, 10)
