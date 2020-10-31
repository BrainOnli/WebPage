$(window).ready(function(){
    p = $('.popup__overlay');
    $('#popup__toggle').click(function() {
        p.css('display', 'block');
    });
    p = $('.popup__overlay');
    $('#popup__toggle2').click(function() {
        p.css('display', 'block');
    });
    p = $('.popup__overlay');
    $('#popup__toggle3').click(function() {
        p.css('display', 'block');
    });
    p.click(function(event) {
        e = event || window.event;
        if (e.target == this) {
            $(p).css('display', 'none');
        }
    });
    $('.popup__close').click(function() {
        p.css('display', 'none');
    });
    });
 