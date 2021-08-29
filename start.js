(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    function countDown() {
        const present = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const UnixTimeLeft = newYear - present;

        innerText('SECONDS', UnixTimeLeft % minute / second);
        innerText('MINUTES', UnixTimeLeft % hour / minute);
        innerText('HOURS', UnixTimeLeft % day / hour);
        innerText('DAYS', UnixTimeLeft / day);

    }

    function innerText(id, fomula) {
        const element = document.getElementById(id);
        element.innerText = Math.floor(fomula);
    }

    function run() {
        setInterval(() => {
            countDown();
        }, second);
    }

    run();
})();