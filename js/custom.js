$(function(){


// back-top part start

$('.back-top').click(function(){
	$('html,body').animate({scrollTop:0},1000);

});
$(window).scroll(function(){
  var scroll=$(this).scrollTop();

  if(scroll>150){
  $('.back-top').fadeIn();
  }
  else{
  	$('.back-top').fadeOut();
  }

});


//============== wow js
new WOW().init();



//============================= banner part start==========
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  fade:true,
  speed:2000,
  autoplaySpeed: 3000,
  autoplayHoverPause:true,
});



 // ============= home page best product part start=============  
$('.pro-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:true,
  prevArrow:'.p-left1',
  nextArrow:'.p-right1',
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
});

//=============== about slider part=============
$('.about-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
});


$('.about-slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
   
    ]
});
 
 //================= product page========================

$('.details-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  autoplaySpeed: 2000,
  asNavFor: '.mini-slider',
  autoplayHoverPause:true,
});


$('.partner-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false, 
  arrows:false,
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
});


$('.mini-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false, 
  arrows:true,
  prevArrow:'.mini-left',
  nextArrow:'.mini-right',
  autoplaySpeed: 2000,
  asNavFor: '.details-slider',
  autoplayHoverPause:true,
   responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
    ]
});



 //================= related slider ========================

$('.related-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:false,
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
  responsive: [
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
         {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    ]
});


 // ============= home page product part start  

$('.product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true, 
  arrows:true,
  prevArrow:'.left1',
  nextArrow:'.right1',
  autoplaySpeed: 2000,
  autoplayHoverPause:true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
});


 // =============testiomonial part start  
$('.test-slider').slick({
 slidesToShow: 2,
 slidesToScroll: 1,
 autoplay: false, 
 arrows:false,
 autoplaySpeed: 1500,
 autoplayHoverPause:true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
});


  

var containerEl = document.querySelector('.project-top');

 var mixer = mixitup(containerEl);











});



var fnam = document.getElementById('fname');
var fnam_err = document.getElementById('fname_err');

var email = document.getElementById('email');
var email_err = document.getElementById('email_err');

var phone = document.getElementById('phone');
var phone_err = document.getElementById('phone_err');

function sub(){
	if(fnam.value==''){
	   fnam_err.innerHTML='Please Input Your Name';
	   fnam.style.border='1px solid #27bab8';
	   fnam.focus();
		return false;
	}

	if(email.value==''){
	   email_err.innerHTML='please Input your Email';
	   email.style.border='1px solid #27bab8';
	   email.focus();
		return false;
	}

	if(phone.value==''){
	   phone_err.innerHTML=' Input your phone number';
	   phone.style.border='1px solid #27bab8';
	   phone.focus();
		return false;
	}

}

function err_valid(){
   if(fnam.value!=''){
	   fnam_err.innerHTML='';
	   fnam.style.border='1px solid #666';
	 
	}
	if(email.value!=''){
	   email_err.innerHTML='';
	   email.style.border='1px solid #666';
	}
	if(phone.value!=''){
	   phone_err.innerHTML='';
	   phone.style.border='1px solid #666';
	}
}

fnam.addEventListener('blur', err_valid);
email.addEventListener('blur', err_valid);
phone.addEventListener('blur', err_valid);
