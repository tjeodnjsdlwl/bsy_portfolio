$(function(){

  gsap.registerPlugin(ScrollTrigger);

  $('body').mousemove(function(e){
    x = e.clientX;
    y = e.clientY;
    gsap.to('.cursor',0.5,{
      x:x,
      y:y,
      stagger:0.1
    })
  })


  $('.header .toggle-menu').click(function(){
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
      $('.header .side-nav').show()
      $("body").addClass('notScroll');
    } else {
      $('.header .side-nav').hide()
      $("body").removeClass('notScroll');
    }
   })
  gsap.utils.toArray('[data-fade=true]').forEach(element => {
    gsap.from(element,{
      scrollTrigger:{
        trigger:element,
        start:"0% 100%",
        end:"100% 0%",
        toggleActions:"play pause resume reset"
      },
      opacity:0,
      yPercent:20
    })
  });


  let horiAni = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-plan",
      start:"0% 0%",
      end:"100% 0%",  
      // markers:true,
      scrub:0.3,
      pin:true,
      invalidateOnRefresh: true,
    },
  })
  horiAni
  .to('.sc-plan .plan-list',{
    xPercent:-100,
    x:()=>{
      return window.innerWidth;
    },
    ease: "none", // <-- IMPORTANT!
  })

  const planList = document.querySelectorAll('.sc-plan .plan-item')
  planList.forEach(element => {
    console.log(element);
    gsap.from(element, {
      opacity:0,
      yPercent:10,
      scrollTrigger: {
        trigger: element,
        containerAnimation:horiAni,
        start: "0% 100%",
        end: "20% 70%",
        scrub: true,
        // markers:true,
      }
    });
  });










}) //지우지 말기