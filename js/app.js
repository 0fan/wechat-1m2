
$(document).on('click','[data-url]',function(){
	window.location = $(this).data('url');
});

$.init();