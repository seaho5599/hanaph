window.onload = function() {
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
  let slide_now = 'ing';

  $('.sw-item-bt').click(function () {

    if (slide_now == 'ing') {
      // 현재 슬라이드 진행 중이라면
      // 슬라이드를 멈춘다.
      slide_now = 'stop';
      sw_item.autoplay.stop();
      $(this).find('span').text('chevron_right');

    } else {
      // 현재 슬라이드가 멈췄다.
      // 다시 슬라이드를 진행한다.
      slide_now = 'ing';
      sw_item.autoplay.start();
      $(this).find('span').text('pause');
    }

  });
}