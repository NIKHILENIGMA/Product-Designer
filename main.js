

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function cursorMouseFollower() {
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    });
}

var tl = gsap.timeline();

// tl.from("#nav",{
//     y:-100,
//     delay:0.1,
//     opacity:0,
//     stagger:0.5,
// })

// tl.from(".landing-title h1, .inner-div #first, .inner-div h5 ",{
//     y:150,
//     delay:0.1,
//     opacity:0,
//     stagger:0.5,
// })

function cursorSqueezing(){

        // define defualt scale value
        var xscale = 1;
        var yscale = 1;

        var xprev = 0;
        var yprev = 0;

        window.addEventListener("mousemove",function(dets){
            xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
            yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);
            
            xprev = dets.clientX;
            yprev = dets.clientY;



    });
} 

cursorMouseFollower();
cursorSqueezing();
