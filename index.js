// gsap.registerplugin(scrollTrigger);

var tl= gsap.timeline()
tl.from("#logo, #compo h3, #contact-us",{
    y:-30,
    duration: 0.5,
    delay:0.3,
    opacity:0,
    stagger:0.18
})

gsap.from("#extra img",{
    x:60,
    duration:1.9,
    delay:1.7,
    opacity:0,

}) 

gsap.from("#cap",{
    x:-60,
    duration:1.9,
    delay:1.7,
    opacity:0,

})

// gsap.from("#page3 h1",{
    
//     y:30,
//     duration:0.5,
//     delay:3.5,
//     opacity:0
// })



gsap.from("#page3 h1,#page3 h2",{
    y:60,
    color:"red",
    duration:0.9,
    delay:0.3,
    opacity:0,
    stagger:0.18,
    scrollTrigger : {
        trigger:"#page3 h1",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 60%"
    }
})

gsap.from("#page3 h3",{
    x:-60,
    duration:3,
    delay:0.4,
    opacity:0,
    // stagger:0.18,
    scrollTrigger : {
        trigger:"#page3 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%"
    }
})

gsap.from("#elem1 h2",{
    y:-60,
    duration:3,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem1 h2",
        scroller:"body",
        // markers:true,
        start:"top 70%"
        
    }
})

gsap.from("#elem1 img",{
    x:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem1 img",
        scroller:"body",
        // markers:true,
        start:"top 70%"
        
    }
})

gsap.from("#elem1 button",{
    y:30,
    duration:2,
    color:"blue",

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem1 button",
        scroller:"body",
        // markers:true,
        start:"top 98%"
        
    }
})



gsap.from("#elem1 p",{
    x:-70,
    duration:1,
    color:"lightpink",
    delay:1.3,
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem1 p",
        scroller:"body",
        // markers:true,
        start:"top 100%"
        
    }
})



gsap.from("#elem2 h2",{
    y:-60,
    duration:3,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem2 h2",
        scroller:"body",
        // markers:true,
        start:"top 70%"
        
    }
})

gsap.from("#elem2 img",{
    x:60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem2 img",
        scroller:"body",
        // markers:true,
        start:"top 70%"
        
    }
})

gsap.from("#elem2 button",{
    y:30,
    duration:2,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem2 button",
        scroller:"body",
        // markers:true,
        start:"top 98%"
        
    }
})



gsap.from("#elem2 p",{
    x:70,
    duration:1,
    delay:1.3,
    color:"lightpink",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem2 p",
        scroller:"body",
        // markers:true,
        start:"top 100%"
        
    }
})



gsap.from("#elem3 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem3 h2",
        scroller:"body",
        // markers:true,
        start:"center 70%"
        
    }
})

gsap.from("#elem3 img",{
    x:-90,
    duration:1.5,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem3 img",
        scroller:"body",
        // markers:true,
        start:"center 85%"
        
    }
})

gsap.from("#elem3 button",{
    y:30,
    duration:1,
    color:"blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem3 button",
        scroller:"body",
        // markers:true,
        start:"center 87%"
        
    }
})



 gsap.from("#elem3 p",{
    x:-70,
    duration:1,
    color : "lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem3 p",
       scroller:"body",
    //    markers:true,
       start:"center 83%"

 }
})



gsap.from("#elem4 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem4 h2",
        scroller:"body",
        // markers:true,
        start:"center 70%"
        
    }
})

gsap.from("#elem4 img",{
    x:90,
    duration:1.5,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem4 img",
        scroller:"body",
        // markers:true,
        start:"center 85%"
        
    }
})

gsap.from("#elem4 button",{
    y:30,
    duration:1,
    color:"blue",

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem4 button",
        scroller:"body",
        // markers:true,
        start:"center 87%"
        
    }
})



 gsap.from("#elem4 p",{
    x:70,
    duration:1,
    color:"lightpink",
    // color: red,
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem4 p",
       scroller:"body",
    //    markers:true,
       start:"center 83%"
        
 }
})

gsap.from("#elem5 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem5 h2",
        scroller:"body",
        // markers:true,
        start:"center 70%"
        
    }
})

gsap.from("#elem5 img",{
    x:-90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem5 img",
        scroller:"body",
        // markers:true,
        start:"center 88%"
        
    }
})

gsap.from("#elem5 button",{
    y:30,
    duration:1,
    color : "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem5 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem5 p",{
    x:-70,
    duration:1,
    color: "lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem5 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})


gsap.from("#elem6 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem6 h2",
        scroller:"body",
        // markers:true,
        start:"center 70%"
        
    }
})

gsap.from("#elem6 img",{
    x:90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem6 img",
        scroller:"body",
        // markers:true,
        start:"center 88%"
        
    }
})

gsap.from("#elem6 button",{
    y:30,
    duration:1,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem6 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem6 p",{
    x:70,
    duration:1,
     color:"lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem6 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})



gsap.from("#elem7 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem7 h2",
        scroller:"body",
        // markers:true,
        start:"center 80%"
        
    }
})

gsap.from("#elem7 img",{
    x:-90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem7 img",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})

gsap.from("#elem7 button",{
    y:30,
    duration:1,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem7 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem7 p",{
    x:-70,
    duration:1,
     color:"lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem7 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})


gsap.from("#elem8 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem8 h2",
        scroller:"body",
        // markers:true,
        start:"center 80%"
        
    }
})

gsap.from("#elem8 img",{
    x:90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem8 img",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})

gsap.from("#elem8 button",{
    y:30,
    duration:1,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem8 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem8 p",{
    x:70,
    duration:1,
     color:"lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem8 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})

gsap.from("#elem9 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem9 h2",
        scroller:"body",
        // markers:true,
        start:"center 80%"
        
    }
})

gsap.from("#elem9 img",{
    x:-90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem9 img",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})

gsap.from("#elem9 button",{
    y:30,
    duration:1,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem9 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem9 p",{
    x:-70,
    duration:1,
     color:"lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem9 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})


gsap.from("#elem10 h2",{
    y:-60,
    duration:2,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem10 h2",
        scroller:"body",
        // markers:true,
        start:"center 80%"
        
    }
})

gsap.from("#elem10 img",{
    x:90,
    duration:1.9,

    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem10 img",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})

gsap.from("#elem10 button",{
    y:30,
    duration:1,
    color: "blue",
    // color:ReadableByteStreamController,
    opacity:0,
    scrollTrigger:{
        trigger:"#elem10 button",
        scroller:"body",
        // markers:true,
        start:"center 90%"
        
    }
})



gsap.from("#elem10 p",{
    x:70,
    duration:1,
     color:"lightpink",
    // delay:1.8,
   // color:ReadableByteStreamController,
    opacity:0,
   scrollTrigger:{
       trigger:"#elem10 p",
       scroller:"body",
    //    markers:true,
       start:"center 87%"
        
 }
})




// var tl2 = gsap.timeline()

// tl2.from("#footer img, .foo-header, #footer h2, #footer h1",{
//        y : -50,
//        opacity: 0,
//        delay:0.3,
//        duration: 6,
//        stagger:1,
//        scrollTrigger :{
//         trigger:"#footer img, .foo-header, #footer h2, #footer h1",
//         scroller: "body",  
//         markers: true,
//         start:"center 40%"
//       }
// })

gsap.from("#footer img",{
    y:50,
    opacity: 0,
    duration:1,
    scrollTrigger : {
        trigger:"#footer img",
        scroller: "body",  
        // markers: true,
        start:"bottom 70%"
    }
})


// gsap.from(".foo-header",{
//     y: 50,
//     opacity: 0,
//     duration:0.5,
//     delay:0.2,
//     scrollTrigger : {
//         trigger:".foo-header",
//         scroller: "body",  
//         markers: true,
//         start:"bottom 78%",
//         // end :"bottom 80%"
//     }
// })


gsap.from("#footer h2",{
    y: -50,
    opacity: 0,
    duration:1,
    delay: 0.2,
    scrollTrigger : {
        trigger:"#footer h2",
        scroller: "body",  
        // markers: true,
        start:"bottom 80%"
    }
})

gsap.from(" #footer h1",{
    x: -50,
    opacity: 0,
    duration:1,
    scrollTrigger : {
        trigger:"#footer h1",
        scroller: "body",  
        // markers: true,
        start:"bottom 84%"
    }
})

// var tl2 = gsap.timeline()

gsap.from("#contact h2, #second i",{
     y:-50,
    duration: 1,
    delay:0.5,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#contact h2, #second i",
        scroller:"body",
        // markers:true,
        start:" bottom bottom ",
        // toggleActions: "play none none none"
       
    }
})







































// gsap.to("#nav", {
//   backgroundColor: "#000",
//   duration: 0.5,
//   height: "110px",
//   scrollTrigger: {
//     trigger: "#nav",
//     scroller: "body",
//     // markers:true,
//     start: "top -10%",
//     end: "top -11%",
//     scrub: 1,
//   },
// });

// gsap.to("#main", {
//   backgroundColor: "#000",
//   scrollTrigger: {
//     trigger: "#main",
//     scroller: "body",
//     // markers: true,
//     start: "top -25%",
//     end: "top -70%",
//     scrub: 2,
//   },
// });

// gsap.from("#about-us img,#about-us-in", {
//   y: 90,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#about-us",
//     scroller: "body",
//     // markers:true,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });
// gsap.from(".card", {
//   scale: 0.8,
//   // opacity:0,
//   duration: 1,
//   stagger: 0.1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     // markers:false,
//     start: "top 70%",
//     end: "top 65%",
//     scrub: 1,
//   },
// });
// gsap.from("#colon1", {
//   y: -70,
//   x: -70,
//   scrollTrigger: {
//     trigger: "#colon1",
//     scroller: "body",
//     // markers:true,
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 4,
//   },
// });
// gsap.from("#colon2", {
//   y: 70,
//   x: 70,
//   scrollTrigger: {
//     trigger: "#colon1",
//     scroller: "body",
//     // markers:true,
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 4,
//   },
// });
// gsap.from("#page4 h1", {
//   y: 50,
//   scrollTrigger: {
//     trigger: "#page4 h1",
//     scroller: "body",
//     // markers:true,
//     start: "top 75%",
//     end: "top 70%",
//     scrub: 3,
//   },
// });


//  gsap.from("#container",{
   
//     opacity: 0,
//     duration:3,
//     delay:3
// })































