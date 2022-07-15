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
$(document).ready(function () {
  // Header
  let header = $('.header');
  let langBox = $('.lang-box');
  let gnb = $('.gnb');  
  gnb.mouseenter(function () {

      header.css('background', '#fff');
      $('.logo').css('background', 'url(images/logo-l.png) no-repeat center');
      $('.gnb-name').css('color', '#000');
      langBox.css({
        'border': '1px solid #000',
        'color': '#000'
      });
      
      langBox.addClass('lang-box-black');
      
      $('.lang-box-list').css('border', '1px solid #000');
      $('.lang-box-lang').css('color', '#000');
      $('.hb-bt-line').css('background', '#000');
      $('.header-btn-left').css('border-right', '1px solid #000');
      $('.hb-bt').addClass('hb-bt-open');
      
        
  });
  let gnbName = $('.gnb-name');
  let subList = $('.sub-list');
  $.each(gnbName, function (index) {
    $(this).mouseenter(function () {
      subList.hide();
      subList.eq(index).show();
    });
  });
  $('.visual').mouseenter(function () {
    subList.stop().fadeOut(200);
    header.css('background', 'transparent');
      $('.logo').css('background', 'url(images/logo-f.png) no-repeat center');
      $('.gnb-name').css('color', '#fff');
      langBox.css({
        'border': '1px solid #fff',
        'color': '#fff'
      });
      langBox.removeClass('lang-box-black');
      $('.lang-box-list').css('border', '1px solid #fff');
      $('.lang-box-lang').css('color', '#fff');
      $('.hb-bt-line').css('background', '#fff');
      $('.header-btn-left').css('border-right', '1px solid #fff');
      $('.hb-bt').removeClass('hb-bt-open');

  });
  langBox.click(function(){
    $('.lang-box-list').toggle();
    $('.lang-box').toggleClass('lang-box-click');
  });



});
window.onload = function() {
// gnb
// visual play버튼
let video = $('video').get(0);
let video_btn = $('.video-btn');

video_btn.click(function(){
  let temp = $(this).hasClass('video-btn-play');
  if(temp == true){
    
    $(this).removeClass('video-btn-play');
    video.play();

  }else{
    
    $(this).addClass('video-btn-play');
    video.pause();
    
  };
  



});

  //item스와이퍼
  let sw_item = new Swiper('.sw-item',{
    loop:true,
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
  swItemBt.click(function(){
    let temp = $(this).hasClass('sw-item-bt-play');
    if(temp == true){
      sw_item.autoplay.start();
      $(this).removeClass('sw-item-bt-play');
    }else{
      sw_item.autoplay.stop();
      $(this).addClass('sw-item-bt-play');
    }
  });

  
}