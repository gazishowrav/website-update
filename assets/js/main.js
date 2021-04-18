jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });

    // ADD TO CART
    let openCart = document.getElementById('openCart');
    let closeCart = document.getElementById('closeCart');
    let addtoCart = document.querySelectorAll('.addto__cart');

    openCart.onclick = function () { 
      for(let x of addtoCart) {
        x.classList.toggle('show');
      }
    };
    
    closeCart.onclick = function () { 
      for(let x of addtoCart) {
        x.classList.remove('show');
      }
    };
});