window.onload = function () {
    $("html, body").animate({scrollTop: 0}, "slow");
    $('body').css('overflow-y', 'unset');

    let c0 = $('#c0');
    let c1 = $('#c1');
    let c2 = $('#c2');
    let c3 = $('#c3');
    let c4 = $('#c4');
    let c5 = $('#c5');
    let c6 = $('#c6');
    let c7 = $('#c7');
    let c8 = $('#c8');
    let c9 = $('#c9');

    setTimeout(animate, 1000);

    function animate() {
        let delay = 100;
        c0.delay(delay).fadeIn();
        c0.css('transition', 'all 0.5s');
        setTimeout(function () {
            c0.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c1.delay(delay).fadeIn();
        c1.css('transition', 'all 0.5s');
        setTimeout(function () {
            c1.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c2.delay(delay).fadeIn();
        c2.css('transition', 'all 0.5s');
        setTimeout(function () {
            c2.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c3.delay(delay).fadeIn();
        c3.css('transition', 'all 0.5s');
        setTimeout(function () {
            c3.css('transform', 'translate(4vw,0)');
        }, delay);
        c4.delay(delay).fadeIn();
        delay += 100;
        c4.css('transition', 'all 0.5s');
        setTimeout(function () {
            c4.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c5.delay(delay).fadeIn();
        c5.css('transition', 'all 0.5s');
        setTimeout(function () {
            c5.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c6.delay(delay).fadeIn();
        c6.css('transition', 'all 0.5s');
        setTimeout(function () {
            c6.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c7.delay(delay).fadeIn();
        c7.css('transition', 'all 0.5s');
        setTimeout(function () {
            c7.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c8.delay(delay).fadeIn();
        c8.css('transition', 'all 0.5s');
        setTimeout(function () {
            c8.css('transform', 'translate(4vw,0)');
        }, delay);
        delay += 100;
        c9.delay(delay).fadeIn();
        c9.css('transition', 'all 0.5s');
        setTimeout(function () {
            c9.css('transform', 'translate(4vw,0)');
        }, delay);
    }


}
