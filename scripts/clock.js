const div = document.getElementById("clock")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
//countdownn clock
const updateClock = () => {
    //defines hour, minutes, second
    let h = 23 - new Date().getHours();
    let m = 59 - new Date().getMinutes();
    let s = 59 - new Date().getSeconds();
    
    const check = (num) => {
        let result = num
        if (num <10) {
            result = "0" + num
        }
        return result;
    }
    
    //h is a variable and is assigned to check(h);
    h = check(h)
    m = check(m)
    s = check(s)

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateClock,1000)
}

updateClock()

