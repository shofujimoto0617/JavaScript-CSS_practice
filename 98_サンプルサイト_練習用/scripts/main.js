document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            el.classList.add();
        }
    } 　

    const so = new ScrollObserver('.tween-animate-title', cb);

    const _inviewAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview');
        }
    }

    const so2 = new ScrollObserver('.cover-slide', __inviewAnimation);
});

