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