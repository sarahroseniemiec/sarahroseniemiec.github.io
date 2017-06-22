document.addEventListener("DOMContentLoaded", function () {

  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  	.fromTo("section.panel.about", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
  	.fromTo("section.panel.projects",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
  	.fromTo("section.panel.contact", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
  		triggerElement: "#pinContainer",
  		triggerHook: "onLeave",
  		duration: "300%"
  	})
  	.setPin("#pinContainer")
  	.setTween(wipeAnimation)
  	.addTo(controller);

  var next = document.getElementById("next")
  var neighborly = document.querySelector(".neighborly")
  var aboutNeighborly = document.querySelector(".aboutneighborly")
  var makeIt = document.querySelector(".makeit")
  var aboutMakeIt = document.querySelector(".aboutmakeit")
  var title = document.querySelector(".title")
  var titleTwo = document.querySelector(".titletwo")

  neighborly.style.display = "none"
  aboutNeighborly.style.display = "none"
  titleTwo.style.display = "none"

  next.addEventListener("click", function () {
    if (neighborly.style.display == "none") {
      neighborly.style.display = "block"
      aboutNeighborly.style.display = "block"
      titleTwo.style.display = "block"
      makeIt.style.display = "none"
      aboutMakeIt.style.display = "none"
      title.style.display = "none"
    } else {
      makeIt.style.display = "block"
      aboutMakeIt.style.display = "block"
      title.style.display = "block"
      neighborly.style.display = "none"
      aboutNeighborly.style.display = "none"
      titleTwo.style.display = "none"
    }




  })

})
