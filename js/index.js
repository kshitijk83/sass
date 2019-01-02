document.addEventListener("DOMContentLoaded", function() {

    // NOTE: Bug:--> navigation through one link to another in navigation page
    var controller = new ScrollMagic.Controller();
    
    // pin header
    var pinHeader = new ScrollMagic.Scene({
        triggerElement: '.header',
        triggerHook: 0,
    })
    .setPin('.header', {pushFollowers: false})
    .addTo(controller);

    // section-feature scenes

    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.feature-box', .5, {autoAlpha:0, ease:Power0.easeNone}, .2)
        .from('.feature-wrapper', 1, {y:'-20%', ease:Power0.easeNone}, 0);

    var secFeatureScene = new ScrollMagic.Scene({
        triggerElement: '.section-features',
        triggerHook: 1,
        duration: '150%'
    })
    .setTween(parallaxTl)
    .addIndicators({
        name: 'fade feature-box',
        colorTrigger: 'black',
        colorStart: 'red'
    })
    .addTo(controller);

    // handling nav links
    var discover = document.querySelector('#discover');
    var about = document.querySelector('#about');
    var features = document.querySelector('#features');
    var tours = document.querySelector('#tours');
    var stories = document.querySelector('#stories');
    var book = document.querySelector('#book');
    var navCheck = document.querySelector('#navi-toggle');
    // console.log(navCheck);
    discover.addEventListener('click', function(){
        smoothScroll('.section-features', 1000);
    })
    about.addEventListener('click', function(){
        navCheck.checked=false;
        smoothScroll('.section-about', 1000);
    })
    features.addEventListener('click', function(){
        navCheck.checked=false;
        smoothScroll('.section-features', 1000);
    })
    tours.addEventListener('click', function(){
        navCheck.checked=false;
        smoothScroll('.section-tours', 1000);
    })
    stories.addEventListener('click', function(){
        navCheck.checked=false;
        smoothScroll('.section-stories', 1000);
    })
    book.addEventListener('click', function(){
        navCheck.checked=false;
        smoothScroll('.section-book', 1000);
    })
});




// function for smooth scrolling
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var distance = targetPos-startPos;
    var startTime =null;
  

    function animation(currentTime){
        if(!startTime) startTime = currentTime;
        var timeElapsed = currentTime-startTime;
        var run = ease(timeElapsed, startPos, distance, duration);
        console.log(run);
        window.scrollTo(0, run);
        if(timeElapsed<duration) {requestAnimationFrame(animation);}
    }

    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };

    requestAnimationFrame(animation);
}





