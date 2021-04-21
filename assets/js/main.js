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

    // Grid & List
    let viewGrid = document.getElementById('viewGrid');
    let viewList = document.getElementById('viewList');
    let filterProducts = document.querySelectorAll('.filter__products');
    let activeClassList = document.querySelectorAll('.filter__content-list');
    let activeClassGrid = document.querySelectorAll('.filter__content-grid');

    viewList.onclick = function () { 
      for(let x of filterProducts) {
        x.classList.remove('show');
      }
      for(let y of activeClassList) {
        y.classList.add('active');
      }
      for(let y of activeClassgrid) {
        y.classList.remove('active');
      }
    };

    viewGrid.onclick = function () { 
      for(let x of filterProducts) {
        x.classList.add('show');
      }
      for(let y of activeClassGrid) {
        y.classList.add('active');
      }
      for(let y of activeClassList) {
        y.classList.remove('active');
      }
    };
    

});