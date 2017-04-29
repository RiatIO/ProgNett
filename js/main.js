$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel({
        fullWidth: false,
        shift: 5,
        padding: 100,
        onCycleTo: function(data) {
            console.log(data);
        }
    });
});
