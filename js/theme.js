// Smooth scrolling effect for navigation links
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});

// Animated title on load
$(window).on('load', function() {
    $(".animated-title").addClass("animated fadeInDown");
});
