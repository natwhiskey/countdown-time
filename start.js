(() => {
    function countDown() {
        const present = new Date().getTime();
        const newYear = new Date('December 31, 2021 23:59:59').getTime();
        const UnixTimeLeft = newYear - present;
    }

    function run() {
    }

    run();
})();