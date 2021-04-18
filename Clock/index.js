setInterval(showTime,1000);

function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = 'AM';
    if (hours == '0')
    {
        hours = 12;
    }
    if (hours > 12) {
        hours -= 12;
        period = 'PM';
    }
    hours = hours <10 ? `0${hours}` : hours;
    minutes = minutes <10 ? `0${minutes}` : minutes;
    seconds = seconds <10 ? `0${seconds}` : seconds;
    const time = `${hours} : ${minutes} : ${seconds}  ${period} `;
    document.getElementById('clock').innerHTML = time;
}
showTime();