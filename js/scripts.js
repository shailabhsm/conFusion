$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause').addClass('fa-play');
        } else if($('#carouselButton').children('span').hasClass('fa-play'))  {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });
    $('#reserveButton').click(function() {
        $('#reserveatable').modal('toggle').modal('show');
        $('#buttons').button('toggle');
    });
    $('#cancelButton').click(function() {
        $('#reserveatable').modal('hide');
    });
    $('#closeButton').click(function() {
        $('#reserveatable').modal('hide');
    });
    $('#login').click(function() {
        $('#loginModal').modal('toggle').modal('show');
    });
    $('#cancelLogin').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#closeLogin').click(function() {
        $('#loginModal').modal('hide');
    });
});