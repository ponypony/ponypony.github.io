$(function() {
	$("li.item a").click(function () {
		var _Gotab_id = $(this).attr("title");
		//alert($(_Gotab_id).offset())
        $("html,body").animate({scrollTop:($(_Gotab_id).offset().top)-55}, 500);
		
		//
	});
});