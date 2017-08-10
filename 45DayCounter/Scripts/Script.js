var deadline = 'October 30 2017 11:59:59 EST';
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endTime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelectorAll('.days');
    var hoursSpan = clock.querySelectorAll('.hours');
    var minutesSpan = clock.querySelectorAll('.minutes');
    var secondsSpan = clock.querySelectorAll('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endTime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;
    }
    var timeinterval = setInterval(function () {
        var t = getTimeRemaining(endTime);
        clock.innerHTML = 'days: ' + t.days + '<br>' +
        'hours: ' + t.hours + '<br>' +
        'minutes: ' + t.minutes + '<br>' +
        'seconds: ' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}
initializeClock('clockdiv', deadline);