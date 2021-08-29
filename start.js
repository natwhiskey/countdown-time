(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    function countDown() {
        const present = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const UnixTimeLeft = newYear - present;
    }

    function run() {
    }

    run();
})();