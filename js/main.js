$(function() {
    $("li.item a").click(function() {
        var _Gotab_id = $(this).attr("title");
        //alert($(_Gotab_id).offset())
        $("html,body").animate({ scrollTop: ($(_Gotab_id).offset().top) - 55 }, 500);

        //
    });
    //
    $(window).scrollTop() < 200 ? $(".gotop").fadeOut(100) : $(".gotop").fadeIn(100);
    $(".gotop").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 400);
    });
});