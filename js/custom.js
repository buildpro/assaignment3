// main slider
$('document').ready(function(){
  $('#bg-carousel').owlCarousel({
      loop : true,
      margin : 0,
      nav : true,
      navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
      dots : true,
      autoplay : true,
      autoplayTimeout : 5500,
      smartSpeed : 1000,
      mouseDrag : true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    
    $('#bg-carousel').on("changed.owl.carousel", function(event){
        // selecting the current active item
        var item = event.item.index-2;
        // first removing animation for all captions
        $('h3').removeClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInLeft');
        
        $('h2').removeClass('animated bounceInDown');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated bounceInDown');
        
        $('.slider-btn').removeClass('animated fadeInUpBig');
        $('.owl-item').not('.cloned').eq(item).find('.slider-btn').addClass('animated fadeInUpBig');
        
        $('.photo').removeClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('.photo').addClass('animated fadeInRight');
        
    })

});//end main slider
