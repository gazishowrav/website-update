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

    $("#openCart").click(function(){
      $(".addto__cart").addClass("show");
    });
    
    $(".openCart").click(function(){
      $(".addto__cart").addClass("show");
    });
    
    $("#closeCart").click(function(){
      $(".addto__cart").removeClass("show");
    });

    // Pre Order

    $("#openPreorder").click(function(){
      $(".pre__order").addClass("show");
    });
    
    $(".openPreorder").click(function(){
      $(".pre__order").addClass("show");
    });
    
    $("#closePreorder").click(function(){
      $(".pre__order").removeClass("show");
    });

    // Grid & List

    $("#viewGrid").click(function(){
      $(".filter__products").addClass("show");
      $(".filter__content-grid").addClass("active");
      $(".filter__content-list").removeClass("active");
    });
    
    $("#viewList").click(function(){
      $(".filter__products").removeClass("show");
      $(".filter__content-list").addClass("active");
      $(".filter__content-grid").removeClass("active");
    });


    // Modal 

    $("#openModal").click(function(){
      $(".custom__modal").addClass("show");
    });
    
    $("#closeModal").click(function(){
      $(".custom__modal").removeClass("show");
    });

    // Filter 

    $("#openFilter").click(function(){
      $(".mobile__filter-sidebar").toggleClass("show");
    });

    // Sidebar 

    $(".openSidebar").click(function(){
      $(".mobile__header-menu").addClass("show");
    });
    
    $("#openSidebar").click(function(){
      $(".mobile__header-menu").addClass("show");
    });
    
    $("#closeSidebar").click(function(){
      $(".mobile__header-menu").removeClass("show");
    });
    
    $("[data-sidebar='closeSidebar']").click(function(){
      $(".mobile__header-menu").removeClass("show");
    });

    // Searchbox

    $("#openSearch").click(function(){
      $(".mobile__search-body").toggleClass("show");
    });
    

};