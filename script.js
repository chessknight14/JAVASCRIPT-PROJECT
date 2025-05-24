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

//____________________________________FLASHLIGHT FUNCTIONS____________________________________

let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");

const isTouchDevice = () => {
    //        TO DETECT TOUCHSCREEN DEVICES
    try {
        //we try to create touchEvent and it would fail for desktops?
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
};

function getMousePosition(e) {
    mouseX = !isTouchDevice() ?  e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ?  e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty("--Xpos", mouseX + "px");
    flashlight.style.setProperty("--Ypos", mouseY + "px"); //ohhhhhh
}

document.addEventListener("mousemove", getMousePosition); //to follow the mouse i think
document.addEventListener("touchmove", getMousePosition);


// hold ctrl and press dash 

// window.alert("This is not a drill");


//____________________________________UPLOAD FUNCTIONS____________________________________


let fileInput = document.getElementById("file-input");
let filesList = document.getElementById("files-list");
let numofFiles = document.getElementById("file-num");

fileInput.addEventListener("change", () => {
    filesList.innerHTML = "";
        numofFiles.textContent = `${fileInput.files.length}
        Files Selected`;


    for (i of fileInput.files){
        let reader = new FileReader();
        let listItem = document.createElement("li");
        let fileName = i.name;
        let fileSize = (i.size / 1024).toFixed(1);
        listItem.innerHTML = `<p> ${fileName}</p> <p> ${fileSize} KB </p>  `;
        if (fileSize >= 1024 ){
            fileSize = (fileSize / 1024 ).toFixed(1);
            listItem.innerHTML = `<p> ${fileName}</p> <p> ${fileSize} MB </p>  `;
        }


        filesList.appendChild(listItem);
    }
});