var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

var menuIcon = document.getElementById('menu-icon');
      var menu = document.getElementById('menu');
      
       menuIcon.addEventListener('click', function() {
        if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        } else {
          menu.style.display = 'flex';
        }
 });