var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 60
    }, 400);
    return false;
});

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        speed: 450,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1224,
              settings: {
                
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ],
    });
});

$(document).ready(function(){
  $('.slider_2').slick({
      infinite: true,
      speed: 450,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
          {
            breakpoint: 1224,
            settings: {
              
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ],
  });
});


$(function(){
  $('.button').click(function(){
      $('.modal').toggleClass('none');
  });
});


$(function(){
  $('.button_x').click(function(){
      $('.modal').toggleClass('none');
  });
});

$(function(){
  $('.button_2_1').click(function(){
      $('.nav_ul_2').toggleClass('none_2');
      $('.phone-button').toggleClass('none');
  });
});

$(function(){
  $('.nav_ul_a').click(function(){
      $('.nav_ul_2').toggleClass('none_2');
  });
});

$(window).on('load', function() {
  $preloader = $('.preloader'),
  $loader = $preloader.find('.preloader');
  $loader.fadeOut();
  $preloader.delay(1500).fadeOut('slow');
});

// калькулятор
var op;
var op2;
var result = document.querySelector('.result');
let tab_1 = document.querySelector('#tab_1');
    tab_2 = document.querySelector('#tab_2');
    tab_3 = document.querySelector('#tab_3');
    tab_4 = document.querySelector('#tab_4');
    tab_5 = document.querySelector('#tab_5');
    number_1 = document.querySelector('#num1');
    number_2 = document.querySelector('#num2');

// функция расчёта
function func() {
  // переменная для результатов
  var result_1;
  var result_2;
  var final_result;
  // получаем первое и второе число
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);

  switch (op) {
    case 1500:
      result_1 = num1 * 1500;
      break;
    case 1700:
      result_1 = num1 * 1700;
      break;
    case 2000:
      result_1 = num1 * 2000;
      break;
  };
  
  switch (op2) {
    case 2000:
      result_2 = num2 * 2000;
      break;
    case 2500:
      result_2 = num2 * 2500;
      break;
  };

  final_result = result_2 + result_1

  if (isNaN(final_result)){
    final_result = '0тг'
  }else{
    // final_result = result_2 + result_1;
    // final_result.toLocaleString('DE');
    final_result = final_result.toLocaleString('en') + 'тг';
  }
  
  result.setAttribute('placeholder', final_result);
};

number_1.addEventListener('input', func);
number_2.addEventListener('input', func);
tab_1.addEventListener('click', func);
tab_2.addEventListener('click', func);
tab_3.addEventListener('click', func);
tab_4.addEventListener('click', func);
tab_5.addEventListener('click', func);