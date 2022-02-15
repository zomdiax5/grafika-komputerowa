let oldValue = 0;
let scroll_direction = "";
let is_scrolling = false;
let scrolled = true;
let frames_scrolled = 0
let panel = 0

window.scroll(0,0);

window.addEventListener('scroll', (e) => {
    if (is_scrolling) {
        return;
    }
    if (oldValue < window.scrollY) {
        is_scrolling = true;
        panel+=1;
        frames_scrolled=0
    } else if (oldValue > window.scrollY) {
        is_scrolling = true;
        panel-=1;
        frames_scrolled=0;
    };
});
setInterval(function () {
    if(panel < 0){
        panel=0;
        is_scrolling=false;
    }
    oldValue = window.scrollY
    let target_position=window.innerHeight*panel
    if(!is_scrolling){
        return;
    }
    if(frames_scrolled < 60){
        frames_scrolled+=1;
        window.scroll(0, window.scrollY + (target_position-window.scrollY) * 0.080)
    }
    else{
        is_scrolling=false;
    }
}, 16.6)