function currentTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

console.log(setInterval(currentTime, 1000))