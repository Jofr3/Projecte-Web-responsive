window.onload = function () {

    setTimeout(animate, 500);

    let c0 = $('#c0');

    function animate() {
        let delay = 100;
        c0.delay(delay).fadeIn();
        c0.css('transition', 'all 0.5s');
        setTimeout(function () {
            c0.css('transform', 'translate(0,0vw)');
        }, delay);
    }
}