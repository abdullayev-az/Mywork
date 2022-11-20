$('.hamburger').click(function(){
    $('.offcanvass').css({'opacity':'1','transform':'translateX(0)'});
    $('.one').css({'transform':'translateX(100px)'});
    $('.two').css({'transform':'translateX(-100px)'});
    $('.line1').css({'transform':'translateX(0)'});
    $('.line2').css({'transform':'translateX(0)'});
});
$('.hamburger-close').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});
    $('.line1').css({'transform':'translateX(-100px)'});
    $('.line2').css({'transform':'translateX(100px)'});
});

$('.contact').click(function(){
   $('.contactpage').fadeIn();
});
$('.contact-menu img').click(function(){
   $('.contactpage').fadeOut();
   $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});
});





 $('nav ul a').mouseover(function(){
   $('.cursor').css({'transform':' scale(4)'});
});
$('.hello').mouseover(function(){
   $('.cursor').css({'transform':' scale(4)'});
});
$('.contact-menu img').mouseover(function(){
   $('.cursor').css({'transform':' scale(3)'});
});
$('.contact-menu input').mouseover(function(){
   $('.cursor').css({'transform':' scale(3)'});
});
$('.contact-menu textarea').mouseover(function(){
   $('.cursor').css({'transform':' scale(3)'});
});
$('.contact-menu button').mouseover(function(){
   $('.cursor').css({'transform':' scale(3)'});
});
$('.bg-texts ul a').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('.projects-name a').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('.chat').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('.cv').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('.contact-social a').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('nav ul a').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.contact-social a').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.cv').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.chat').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.projects-name a').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.hello').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.contact-menu img').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.contact-menu input').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.contact-menu textarea').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.contact-menu button').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.bg-texts ul a').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});



 TweenMax.from(".logo", 2, {
    opacity: 0,
    y: -50,
    delay: 1.8,
    ease: Expo.easeInOut
 })

 TweenMax.staggerFrom(".ul1 a", 2, {
    opacity: 0,
    x: -150,
    delay: 3,
    ease: Power3.easeInOut
 }, 0.51)

 TweenMax.staggerFrom(".ul2 a", 2, {
    opacity: 0,
    x: 150,
    delay: 2,
    ease: Power3.easeInOut
 }, 0.51)

 TweenMax.from(".hello", 2, {
   opacity: 0,
   x: -150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)


TweenMax.from(".text", 2, {
   opacity: 0,
   x: 150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".service1", 2, {
   opacity: 0,
   x: -150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".service2", 2, {
   opacity: 0,
   y: -150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".service3", 2, {
   opacity: 0,
   x: 150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.01)

TweenMax.from(".carousel", 2, {
   opacity: 0,
   y: 150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.03)

TweenMax.from(".about-img", 2, {
   opacity: 0,
   x: -150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.03)

TweenMax.from(".about-text", 2, {
   opacity: 0,
   x: 150,
   delay: 3.5,
   ease: Power3.easeInOut
}, 0.03)

TweenMax.staggerFrom(".hamburger", 2, {
   opacity: 0,
   y: -50,
   x: -50,
   delay: 3,
   ease: Power3.easeInOut
}, 0.2)

TweenMax.to(".homepage-menu", 3, {
   width: "100%",
   ease: Expo.easeInOut
}, 0.2)
TweenMax.to(".services-main", 2, {
   width: "100%",
   ease: Expo.easeInOut
}, 0.2)
TweenMax.to(".projectspage", 2.5, {
   width: "100%",
   ease: Expo.easeInOut
}, 0.5)
TweenMax.to(".aboutpage", 2.5, {
   height: "100vh",
   ease: Expo.easeInOut
}, 0.2)

$('.chat').click(function(){
   $('.message').css('display','flex');
})
$('.close').click(function(){
   $('.message').css('display','none');
})

$(window).on('load', function(){
   setTimeout(removeLoader, 2000);
 });
 function removeLoader(){
     $( ".loader-wrapper" ).fadeOut(500, function() {
     $( ".loader-wrapper" ).remove(); 
   });  
 }




const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';
});


$('.about').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});
});
$('.home').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});

});
$('.contact').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});
});
$('.services').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});

});
$('.projects').click(function(){
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});

});


$('.service1').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
  
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service1').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
   
   $('.cursor').css({'transform':' scale(1)'});
});
$('.service2').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
   
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service2').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
   
   $('.cursor').css({'transform':' scale(1)'});
});
$('.service3').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
   
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service3').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
  
   $('.cursor').css({'transform':' scale(1)'});
});







