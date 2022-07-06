window.onload = function() {
  // gnb
let header = $('.header');
let logo = $('.logo');
let gnb = $('.gnb');
let gnb_name = $('.gnb-name');
let sub_box_bg = $('.sub-box-bg');
let header_btn = $('.header-btn');
let lang_box = $('.lang-box');
let lang_box_list = $('.lang-box-list');
let header_btn_left = $('.header-btn-left');
let hb_bt = $('.hb-bt')
let hb_bt_line = $('.hb-bt-line');
let lang_box_lang = $('.lang-box-lang');
gnb.mouseenter(function(){
  header.addClass('change');
  logo.addClass('logo-2');
  gnb_name.addClass('gnb-name-open');
  sub_box_bg.addClass('sub-box-bg-open');
  lang_box.addClass('lang-box-open');
  header_btn_left.addClass('header-btn-left-open');
  hb_bt_line.addClass('hb-bt-line-open');
  hb_bt.addClass('hb-bt-open');
  lang_box_list.addClass('.lang-box-list');
  lang_box_lang.addClass('.lang-box-lang');
});
gnb.mouseleave(function(){
  header.removeClass('change');
  logo.removeClass('logo-2');
  gnb_name.removeClass('gnb-name-open')
  sub_box_bg.removeClass('sub-box-bg-open');
  lang_box.removeClass('lang-box-open');
  header_btn_left.removeClass('header-btn-left-open');
  hb_bt.removeClass('hb-bt-open');
  hb_bt_line.removeClass('hb-bt-line-open');
  lang_box_list.removeClass('.lang-box-list-open');
  lang_box_lang.removeClass('.lang-box-lang-open');
});
lang_box.click(function(){
  lang_box_list.fadeToggle(0);
  lang_box.toggleClass('lang-box-click');
});
$('lang-box-open').click(function(){
  $(this).toggleClass('lang-box-open-black');
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