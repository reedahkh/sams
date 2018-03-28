$(document).ready(function() {
    //testimonial carousel
    $(".testimonial-carousel").slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 6000,
        prevArrow: $(".testimonial-carousel-controls .prev"),
        nextArrow: $(".testimonial-carousel-controls .next")
    });

    // big video background
   /* $(function() {
        var BV = new $.BigVideo({container: $('#video_bg')});

        BV.init();
        BV.getPlayer().pause();

        BV.show('../video/SAMS_Advert.mp4', {doLoop:true}, {autoplay:true})
    });*/
        
    // features card toggle
    $(".card_container").mouseover(function(){
        $(this).find(".side_2").show ()
    });
    $(".card_container").mouseleave(function(){
        $(this).find(".side_2").hide();
    });

});
