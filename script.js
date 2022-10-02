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



$('.home').click(function(){
   $('.home').css('color','#F15412');
   $('.about').css('color','#fff');
   $('.services').css('color','#fff');
   $('.projects').css('color','#fff');
   $('.contact').css('color','#fff');
});
$('.about').click(function(){
   $('.home').css('color','#fff');
   $('.about').css('color','#F15412');
   $('.services').css('color','#fff');
   $('.projects').css('color','#fff');
   $('.contact').css('color','#fff');
});

$('.services').click(function(){
   $('.home').css('color','#fff');
   $('.about').css('color','#fff');
   $('.services').css('color','#F15412');
   $('.projects').css('color','#fff');
   $('.contact').css('color','#fff');
});
$('.projects').click(function(){
   $('.home').css('color','#fff');
   $('.about').css('color','#fff');
   $('.services').css('color','#fff');
   $('.projects').css('color','#F15412');
   $('.contact').css('color','#fff');
});


 $('nav ul li').mouseover(function(){
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
$('.bg-texts ul li').mouseover(function(){
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
$('.move-right ul li').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('.contact-social a').mouseover(function(){
   $('.cursor').css({'transform':' scale(3.5)'});
});
$('nav ul li').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});
$('.move-right ul li').mouseout(function(){
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
$('.bg-texts ul li').mouseout(function(){
   $('.cursor').css({'transform':' scale(1)'});
});



 TweenMax.from(".logo", 2, {
    opacity: 0,
    y: -50,
    delay: 1.8,
    ease: Expo.easeInOut
 })

 TweenMax.staggerFrom(".ul1 li", 2, {
    opacity: 0,
    x: -150,
    delay: 2,
    ease: Power3.easeInOut
 }, 0.51)

 TweenMax.staggerFrom(".ul2 li", 2, {
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



TweenMax.staggerFrom(".hamburger", 2, {
   opacity: 0,
   y: -50,
   x: -50,
   delay: 3,
   ease: Power3.easeInOut
}, 0.2)

TweenMax.to(".homepage-menu", 2, {
   width: "100%",
   ease: Expo.easeInOut
}, 0.2)


$('.chat').click(function(){
   $('.message').css('display','flex');
})
$('.close').click(function(){
   $('.message').css('display','none');
})






const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';
});


$('.about').click(function(){
   $('.homepage-menu').fadeOut();
   $('.aboutpage').fadeIn('slow');
   $('.servicespage').fadeOut();
   $('.projectspage').fadeOut();
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});
});
$('.home').click(function(){
   $('.homepage-menu').fadeIn("slow");
   $('.aboutpage').fadeOut();
   $('.servicespage').fadeOut();
   $('.projectspage').fadeOut();
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
   $('.homepage-menu').fadeOut();
   $('.aboutpage').fadeOut();
   $('.projectspage').fadeOut();
   $('.servicespage').fadeIn('slow');
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});

});
$('.projects').click(function(){
   $('.homepage-menu').fadeOut();
   $('.aboutpage').fadeOut();
   $('.servicespage').fadeOut();
   $('.projectspage').fadeIn('slow');
    $('.offcanvass').css({'opacity':'0','transform':'translateX(-100%)'});
    $('.one').css({'transform':'translateX(0)'});
    $('.two').css({'transform':'translateX(0)'});

});


$('.service1').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
   $('.services-main').css({'background-image':'  linear-gradient(rgba(10, 9, 9, 0.174),rgba(28, 247, 28, 0.534)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service1').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
   $('.services-main').css({'background-image':' linear-gradient(rgba(10, 9, 9, 0.174),rgba(56, 238, 229, 0.534)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(1)'});
});
$('.service2').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
   $('.services-main').css({'background-image':'  linear-gradient(rgba(10, 9, 9, 0.174),rgba(186, 4, 231, 0.534)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service2').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
   $('.services-main').css({'background-image':' linear-gradient(rgba(10, 9, 9, 0.174),rgba(56, 238, 229, 0.534)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(1)'});
});
$('.service3').mouseover(function(){
   $(this).css({'transform':' scale(1.1)','opacity':'1'});
   $('.services-main').css({'background-image':'  linear-gradient(rgba(10, 9, 9, 0.174),rgba(228, 252, 15, 0.781)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(4)'});
});
$('.service3').mouseout(function(){
   $(this).css({'transform':' scale(1)','opacity':'0.8'});
   $('.services-main').css({'background-image':' linear-gradient(rgba(10, 9, 9, 0.174),rgba(56, 238, 229, 0.534)) , url(img/haqqimdabg.jpg)'});
   $('.cursor').css({'transform':' scale(1)'});
});


$('.click1').click(function(){
   $('.profects1').fadeIn();
   $('.profects2').fadeOut();
   $('.profects3').fadeOut();
   $('.profects4').fadeOut();
   $(this).css('background-color','#303896');
   $('.click2').css('background-color','#F15412');
   $('.click3').css('background-color','#F15412');
   $('.click4').css('background-color','#F15412');
})
$('.click2').click(function(){
   $('.profects1').fadeOut();
   $('.profects3').fadeOut();
   $('.profects4').fadeOut();
   $('.profects2').fadeIn();
   $('.name2').css('opacity','1');
   $('.profects2').css('visibility','visible');
   $(this).css('background-color','#303896');
   $('.click1').css('background-color','#F15412');
   $('.click3').css('background-color','#F15412');
   $('.click4').css('background-color','#F15412');
})
$('.click3').click(function(){
   $('.profects1').fadeOut();
   $('.profects2').fadeOut();
   $('.profects4').fadeOut();
   $('.profects3').fadeIn();
   $('.name3').css('opacity','1');
   $('.profects3').css('visibility','visible');
   $(this).css('background-color','#303896');
   $('.click1').css('background-color','#F15412');
   $('.click2').css('background-color','#F15412');
   $('.click4').css('background-color','#F15412');
})
$('.click4').click(function(){
   $('.profects1').fadeOut();
   $('.profects2').fadeOut();
   $('.profects3').fadeOut();
   $('.profects4').fadeIn();
   $('.name4').css('opacity','1');
   $('.profects4').css('visibility','visible');
   $(this).css('background-color','#303896');
   $('.click1').css('background-color','#F15412');
   $('.click2').css('background-color','#F15412');
   $('.click3').css('background-color','#F15412');
})