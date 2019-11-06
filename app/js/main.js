$(function(){

    $('.header_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
        asNavFor: '.slider_dots'
    });

    $('.slider_dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider'
    }); 
    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
        asNavFor: '.slider-map',
    });
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
    });
    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
   
    });
    $('.sleep__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
        
    });

    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/left-arrow.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/right-arrow.svg" alt="">',
        
    });
    
    let five = 5
        four = 4
        cost = 349;
 
    
    $('.plusNights').on('click', function(){
        five++;
        
        console.log(five);
        $('.nights').html(five);
    
        cost += 25;
        $('.cost').html(cost); 
    
        
    });

    $('.minusNights').on('click', function(){
        if(five > 1){
        five--;
            console.log(five);
            $('.nights').html(five); 
        
            cost -= 25;
            $('.cost').html(cost); 
        
        }
    });

    $('.plusGuests').on('click', function(){
        four++;
        console.log(four);
        $('.guests').html(four);

        cost += 25;
        $('.cost').html(cost); 
    });
    $('.minusGuests').on('click', function(){
        if(four > 1){
            four--;
            console.log(four);
            $('.guests').html(four); 

            cost -= 25;
            $('.cost').html(cost); 
        }
    });

    let linkIndex = 0;

    $('.surf_btn').on('click', function(){
        $('.surf_btn').html('+');
        $('.surf_btn-text').removeClass('surf_current');
            
        $(this).index();
        linkIndex=$(this).index();
        console.log(linkIndex);
    
        if(linkIndex == 1){
            $('.surf_btn-text-1').addClass('surf_current');
            $(this).html('-');
        }
        if(linkIndex == 3){
            $('.surf_btn-text-2').addClass('surf_current');
            $(this).html('-');
        }
        if(linkIndex == 5){
            $('.surf_btn-text-3').addClass('surf_current');
            $(this).html('-');
        }
    });

    let scroll = $('.header').innerHeight();
    $('.header_arrows').on('click', function(){
        console.log(scroll);
        $('html, body').animate({
            scrollTop: scroll
        }, 500);
    });
   
});