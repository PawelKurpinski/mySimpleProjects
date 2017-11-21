$(document).ready(function () {

    var $arrow = $("#arrow");

    $("#arrow").on("click", function () {
        $("body, html").animate({
            scrollTop: $("main").offset().top
        }, 1200)
    })

});
