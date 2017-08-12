$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel({
        fullWidth: false,
        shift: 5,
        padding: 150,
        onCycleTo: function(data) {
            $('#board-name').text(data.attr("name"));
            $('#board-title').text(data.attr("title"));
            $('#board-email').text(data.attr("email"));
        }
    });

});

$(document).on('click', 'a', function(event){
    // event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
