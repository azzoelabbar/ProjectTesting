const control = document.getElementById('loginpage') // login 
control.addEventListener('click', onclickfunction1) ;
function onclickfunction1(x) {
  console.log('ssssss')
x.preventDefault ;
  document.getElementById('loginnnn').style.display= 'block'

}
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});