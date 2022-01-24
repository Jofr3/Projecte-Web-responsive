window.onload = function () {

    let cube = $('#main-cube');
    let title1 = $('h1#title1');
    let title2 = $('h1#title2');
    let fig1 = $('figure#fig1');
    let fig2 = $('figure#fig2');
    let secCube = $('figure#sec-cube-figure');
    let firCube = $('figure#fir-cube-figure');
    let midCube = $('div#mid-cube');

    let menuTitle0 = $('#menu-title0');
    let menuTitle1 = $('#menu-title1');
    let menuTitle2 = $('#menu-title2');


    $("html, body").animate({scrollTop: 0}, "slow");
    setTimeout(fadeInMainCube, 1000);
    setTimeout(fadeInTitle, 1300);
    setTimeout(hover, 1300);

    function fadeInMainCube() {
        cube.fadeIn(700);
    }

    function fadeInTitle() {
        title1.fadeIn(600);
        title2.fadeIn(600);
        setTimeout(titleReposition, 400);
    }

    function titleReposition() {
        title1.css('transition', 'all 1s');
        title2.css('transition', 'all 1s');
        title1.css('transform', 'translate(49%,0)')
        title2.css('transform', 'translate(-78%,0)')
        setTimeout(unblock, 1000);

        function unblock() {
            $('body').css('overflow-y', 'unset');
            titleReposition2();
        }
    }

    function titleReposition2() {
        window.addEventListener("scroll", () => {
            let coord1 = ((window.innerWidth / 100) * 70.75) - window.innerWidth;
            let coord2 = ((window.innerWidth / 100) * 75.9) - window.innerWidth;
            fig1.css('transition', 'all 0.6s');
            fig2.css('transition', 'all 0.6s');
            fig1.css('left', (coord1 + window.scrollY) + 'px');
            fig2.css('right', (coord2 + window.scrollY) + 'px');
            cubeReposition();
            console.log(window.scrollY);
        });
    }

    function cubeReposition() {
        if (window.scrollY > 1300) {
            fig1.css('display', 'none');
            fig2.css('display', 'none');
            cube.css('transition', 'all 0.7s');
            cube.css('transform', 'scale(0.38)');
            cube.css('margin-right', '25vw')
            secCube.css('transition', 'all 1s');
            secCube.css('transition-delay', '0.5s');
            secCube.css('transform', 'translate(0,-19vh)');
            firCube.css('transition', 'all 1.5s');
            firCube.css('transition-delay', '0.5s');
            firCube.css('transform', 'translate(0,5vh)');
            menuTitle0.fadeIn();
            menuTitle1.fadeIn();
            menuTitle2.fadeIn();
        } else {
            cube.css('transition', 'all 0.7s');
            cube.css('transform', 'scale(1)');
            fig1.css('display', '');
            fig2.css('display', '');
            cube.css('margin-right', '');
            secCube.css('transition', 'all 2s');
            secCube.css('transform', 'translate(0,85vh)');
            firCube.css('transition', 'all 2s');
            firCube.css('transform', 'translate(0,-80vh)');
            menuTitle0.fadeOut();
            menuTitle1.fadeOut();
            menuTitle2.fadeOut();
        }


    }


    function hover() {
        if (menuTitle0.is(":hover") || firCube.is(":hover")) {
            first();
        } else {
            firstNo();
        }
        if (menuTitle1.is(":hover") || midCube.is(":hover")) {
            sec();
        } else {
            secNo();
        }
        if (menuTitle2.is(":hover") || secCube.is(":hover")) {
            third();
        } else {
            thirdNo();
        }

        redoHover();
    }

    function redoHover() {
        setTimeout(hover, 100);
    }

    function first() {
        console.log("hover first");
        menuTitle0.css('transition', 'all 0.3s');
        menuTitle0.css('transform', 'skew(-10deg)');
        firCube.animate({left: '20px'});
    }

    function firstNo() {
        menuTitle0.css('transition', 'all 0.3s');
        menuTitle0.css('transform', 'skew(0deg)');
    }

    function sec() {
        console.log("hover sec");
        menuTitle1.css('transition', 'all 0.3s');
        menuTitle1.css('transform', 'skew(-10deg)');
    }

    function secNo() {
        menuTitle1.css('transition', 'all 0.3s');
        menuTitle1.css('transform', 'skew(0deg)');
    }

    function third() {
        console.log("hover third");
        menuTitle2.css('transition', 'all 0.3s');
        menuTitle2.css('transform', 'skew(-10deg)');
    }

    function thirdNo() {
        menuTitle2.css('transition', 'all 0.3s');
        menuTitle2.css('transform', 'skew(0deg)');
    }

    // TODO center the cube correctly

    // TODO fix top values for the figures (titles) so that they shrink and expand correctly

}
