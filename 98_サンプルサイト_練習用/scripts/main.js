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
});

