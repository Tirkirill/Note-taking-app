function getStringNowDate() {
    let now = new Date();
    let day = now.getDate().toString();
    let month = (now.getMonth()+1).toString();
    let hours = now.getHours().toString();
    let minutes = now.getMinutes().toString();
    if (day.length == 1) day = "0"+day;
    if (month.length==1) month="0"+month;
    if (hours.length==1) hours="0"+hours;
    if (minutes.length==1) minutes="0"+minutes;
    return day + "." + month + "." + now.getFullYear() + " " + hours + ":" + minutes;
}

export default getStringNowDate;