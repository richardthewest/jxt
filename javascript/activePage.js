document.addEventListener("DOMContentLoaded", function(){
	$('.topNav a').each(function() {
		if ($(this).attr('href') == location.href.split("/").slice(-1)){ $(this).addClass('active'); }
	});
});