'use strict';

window.addEventListener('DOMContentLoaded', function() {

    let deadline = '2022-07-01';

    function getTimeRemaining (timeEnd) {
        let t = Date.parse(timeEnd) - Date.parse(new Date ()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        hours = Math.floor(t / (1000*60*60))



        return {
            'total' : t,
            'seconds' : seconds,
            "minutes" : minutes,
            'hours' : hours
        };
    }


    function setClock (id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval (updateClock, 1000);


            function updateClock () {

                let t = getTimeRemaining (endTime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }

            }


    }



    setClock ('timer', deadline);



});