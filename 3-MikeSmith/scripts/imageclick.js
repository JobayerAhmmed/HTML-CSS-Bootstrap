$(document).ready(function() {
	$('.img-responsive').click(function(){
	  	$('.modal-body').empty();
	  	$($(this).parents('div').html()).appendTo('.modal-body');
	  	$('#myModal').modal({show:true});
	});
});