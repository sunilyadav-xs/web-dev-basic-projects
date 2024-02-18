
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let format = document.getElementById("format");


setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h > 12){
        format.innerHTML = "PM";
    }
    else{
        format.innerHTML = "AM";
    
    }
    if(h > 12){
        h -= 12
    }
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}, 1000)
