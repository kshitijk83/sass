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

var learn = document.querySelector('.tour');

learn.addEventListener('click', function(){
    smoothScroll('.section-features', 1000);
})