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
}