$(function(){
    $('.nav-justified li').hover(function() { 
        var index=$(this).index(); 
        $('.tab-content .tab-pane').eq(index).show().siblings().hide(); 
    });
    // $(".tl_bottom").click(function(){
    //     alert("aa")
    //     $("tl_div").fadeIn();
    // });
});
$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true
    });
});