$(document).ready(function() {
	$('#mylist').on('click', 'li', function() {
	    $('#mylist li.active').removeClass('active');
	    $(this).addClass('active');
	});
});