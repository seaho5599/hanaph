$(document).ready(function () {
  // 안내창 기능
  // 추가기능:  스크롤바 없에기
  $('html').css('overflow', 'hiden');
  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  modalClose.click(function () {
    modalWrap.stop().fadeOut(100);
    // 추가기능:  스크롤바 살리기
    $('html').css('overflow', 'auto');
  });
  let modalMain = $('.modal-main');
  // 내용배경 클릭
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  // 전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(100);
    $('html').css('overflow', 'auto');
  });
});
// more-menu메뉴
$(document).ready(function () {
  let moreMenu = $('.more-menu');
  let moreMenuClose = $('.more-menu-close');
  let hbBt = $('.hb-bt')
  hbBt.click(function (event) {
    event.stopPropagation();
    moreMenu.fadeIn();
  });

  moreMenuClose.click(function () {
    moreMenu.fadeOut();
  });

});

$(document).ready(function () {
  // Header
  let header = $('.header');
  let langBox = $('.lang-box');
  let gnb = $('.gnb');
  let visual = $('.visual')

  // toggle 된 상태
  let langToggle = false;

  langBox.click(function (e) {
    e.stopPropagation();
    
    if (langToggle) {
      langToggle = false;
      $(this).removeClass('lang-box-click');
      $('.lang-box-list').hide();
    } else {
      langToggle = true;
      $(this).toggleClass('lang-box-click');
      $('.lang-box-list').show();
    }
  });

    gnb.mouseenter(function () {
    header.addClass('header-ch');
    $('.logo').addClass('logo-2');
    $('.gnb-name').addClass('gnb-name-ch');
    langBox.addClass('lang-box-ch');
    $('.lang-box-list').addClass('lang-box-list-ch');
    $('.lang-box-lang').addClass('lang-box-lang-ch');
    $('.hb-bt-line').addClass('hb-bt-line-ch');
    $('.header-btn-left').addClass('header-btn-left-ch');
    $('.hb-bt').addClass('hb-bt-open');

  });
  visual.mouseenter(function () {
    subList.stop().fadeOut(200);
    header.removeClass('header-ch');
    $('.logo').removeClass('logo-2');
    $('.gnb-name').removeClass('gnb-name-ch');
    langBox.removeClass('lang-box-ch');
    langBox.removeClass('lang-box-ch-click');
    $('.lang-box-list').removeClass('lang-box-list-ch');
    $('.lang-box-lang').removeClass('lang-box-lang-ch');
    $('.hb-bt-line').removeClass('hb-bt-line-ch');
    $('.header-btn-left').removeClass('header-btn-left-ch');
    $('.hb-bt').removeClass('hb-bt-open');

  });
  let gnbName = $('.gnb-name');
  let subList = $('.sub-list');
  $.each(gnbName, function (index) {
    $(this).mouseenter(function () {
      subList.hide();
      subList.eq(index).show();
    });
  });

});
window.onload = function () {
  // gnb
  // visual play버튼
  let video = $('video').get(0);
  let video_btn = $('.video-btn');

  video_btn.click(function () {
    let temp = $(this).hasClass('video-btn-play');
    if (temp) {

      $(this).removeClass('video-btn-play');
      video.play();

    } else {

      $(this).addClass('video-btn-play');
      video.pause();

    };
  });

  //item스와이퍼
  let sw_item = new Swiper('.sw-item', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-item-pg",
      clickable: true,
    },
  });
  let swItemBt = $('.sw-item-bt');
  swItemBt.click(function () {
    let temp = $(this).hasClass('sw-item-bt-play');
    if (temp == true) {
      sw_item.autoplay.start();
      $(this).removeClass('sw-item-bt-play');
    } else {
      sw_item.autoplay.stop();
      $(this).addClass('sw-item-bt-play');
    }
  });
  let wW = window.innerWidth;
  let swJob = null;
  let swNews = null; 

  if(wW <= 1000) { 
    swJob = new Swiper('.sw-job', {
      navigation: {
        nextEl: ".sw-job-next",
        prevEl: ".sw-job-prev"
      }
    });
    swNews = new Swiper('.sw-news', {
      // loop: true,
      navigation: {
        nextEl: ".sw-news-next",
        prevEl: ".sw-news-prev",
      },
    });
  }



  $(window).resize(function () {
    // let temp = $(window).width();
    let temp = window.innerWidth;

    if (temp <= 1000) {
      if(swNews == null){
        swNews = new Swiper('.sw-news', {
          // loop: true,
          navigation: {
            nextEl: ".sw-news-next",
            prevEl: ".sw-news-prev",
          },
        });
      }

      // swJob 없다면 한번만 만들기
      if(swJob == null) {       
        swJob = new Swiper('.sw-job', {
          navigation: {
            nextEl: ".sw-job-next",
            prevEl: ".sw-job-prev"
          }
        });
      }

    }else{
      
      // swJob 있으면 한번만 지우기
      $('.sw-news .swiper-slide').removeAttr('style', 0);
      if(swNews != null) {    
        swNews.destroy();
        swNews = null;
      }
      // swJob 있으면 한번만 지우기
      $('.sw-job .swiper-slide').removeAttr('style', 0);
      if(swJob != null) {    
        swJob.destroy();
        swJob = null;
      }

    }

  });

  
}