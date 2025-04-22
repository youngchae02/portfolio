$(function () {
  /* 메인슬라이드 */
  let swiper = new Swiper(".banner", {
    loop: true, // 무한 루프
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
    },
  });

  $(window).scroll(function () {
    let scTop = $(this).scrollTop();
    if (scTop > 100) { // 스크롤 100px 이상이면 보이기
      $('.fix_btn').addClass('on');
    } else {
      $('.fix_btn').removeClass('on');
    }
  });

  let goswiper = new Swiper(".brand_go", {
    slidesPerView: 7,
    spaceBetween: 15,
    navigation: {
      nextEl: ".brand_go_wrap .right",
      prevEl: ".brand_go_wrap .left",
    },
  });

  let couponswiper = new Swiper(".coupon", {
    loop: true,
    slidesPerView: 1.5,
    scrollbar: {
      el: ".coupon_list .swiper-scrollbar",
      hide: true,
    },
  });

  let eventswiper = new Swiper('.event', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
  /* txt */
  $('#txtAni1').simplyScroll({
    speed: 100,
    // direction: 'backwards',
    pauseOnHover: false,
    frameRate: 10, //기본값이 24인데 10으로 줄임
  });




  
  $('.menu .circle li').click(function () {
    $('.menu .circle li').removeClass('on');
    $(this).addClass('on');
    $('.menu .box').removeClass('on');

    let menuI = $(this).index();
    // console.log (menuI);
    $('.menu').find('.box').eq(menuI).addClass('on');
  });







  let mdswiper = new Swiper('.md_list', {
    slidesPerView: 6.5,
    spaceBetween: 15,
    loop: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });
});/* ready end */