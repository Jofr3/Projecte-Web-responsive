window.onload = function () {

    setTimeout(animate, 1000);

    let c0 = $('#c0');

    function animate() {
        let delay = 300;
        c0.delay(delay).fadeIn();
        setTimeout(function () {
            c0.css('transform', 'translate(0,2vw)');
            c0.css('transition', 'all 1s');
        }, delay);
    }
}
