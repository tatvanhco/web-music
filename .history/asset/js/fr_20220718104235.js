window.onload=function(){
    $('.slide-music-main').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<a class="prev">&#10094;</a>',
    nextArrow:'<a class="next">&#10095;</a>',
    centerMode:true,
    slidesToShow: 2,
    slidesToScroll: 0,
    dots: true
    });
};