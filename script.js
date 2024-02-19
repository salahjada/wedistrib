$(document).ready(function(){
    $('.animated-button').on('mouseenter', function(){
        $(this).addClass('is-active');
    }).on('mouseleave', function(){
        $(this).removeClass('is-active');
    });
});