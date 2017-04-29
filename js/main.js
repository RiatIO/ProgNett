$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel({
        fullWidth: false,
        shift: 5,
        padding: 100,
        onCycleTo: function(data) {
            $('#board-name').text(data.attr("name"));
            $('#board-title').text(data.attr("title"));
            $('#board-email').text(data.attr("email"));
        }
    });

});
