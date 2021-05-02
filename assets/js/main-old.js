window.onload = function() {
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

    var openCart = document.getElementById('openCart');
    var closeCart = document.getElementById('closeCart');
    var addtoCart = document.querySelectorAll('.addto__cart');

    openCart.onclick = function () { 
      for(var x of addtoCart) {
        x.classList.toggle('show');
      }
    };
    
    closeCart.onclick = function () { 
      for(var x of addtoCart) {
        x.classList.remove('show');
      }
    };

    // Grid & List
    var viewGrid = document.getElementById('viewGrid');
    var viewList = document.getElementById('viewList');
    var filterProducts = document.querySelectorAll('.filter__products');
    var activeClassList = document.querySelectorAll('.filter__content-list');
    var activeClassGrid = document.querySelectorAll('.filter__content-grid');

    viewList.onclick = function () { 
      for(var x of filterProducts) {
        x.classList.remove('show');
      }
      for(var x of activeClassList) {
        x.classList.add('active');
      }
      for(var x of activeClassgrid) {
        x.classList.remove('active');
      }
    };

    viewGrid.onclick = function () { 
      for(var x of filterProducts) {
        x.classList.add('show');
      }
      for(var x of activeClassGrid) {
        x.classList.add('active');
      }
      for(var x of activeClassList) {
        x.classList.remove('active');
      }
    };

    // Modal 

    var openModal = document.getElementById('openModal');
    var closeModal = document.getElementById('closeModal');
    var customModal = document.querySelectorAll('.custom__modal');

    openModal.onclick = function () { 
      for(var x of customModal) {
        x.classList.toggle('show');
      }
    };
    
    closeModal.onclick = function () { 
      for(var x of customModal) {
        x.classList.remove('show');
      }
    };

    // Filter 

    var openFilter = document.getElementById('openFilter');
    var closeFilter = document.getElementById('closeFilter');
    var filterView = document.querySelectorAll('.mobile__filter-sidebar');

    openFilter.onclick = function () { 
      for(var x of filterView) {
        x.classList.toggle('show');
      }
    };
    
    closeFilter.onclick = function () { 
      for(var x of filterView) {
        x.classList.remove('show');
      }
    };
    

};