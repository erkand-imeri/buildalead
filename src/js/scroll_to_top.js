export default function scrollToTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scroll-to-top').fadeIn();
        } else {
    $('.scroll-to-top').fadeOut();
    
        }
    });
    // scroll body to 0px on click
    $('.scroll-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
}