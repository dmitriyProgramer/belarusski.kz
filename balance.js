$(document).ready(function() {
	window.delInt = setInterval(function(){
		if( $('#rec260174013 form button').is('[type="submit"]') ){
			style = $('#rec260174013 form button').attr('style')+'padding-top:17px;display:inline-block;';
			_class = $('#rec260174013 form button').attr('class');
			$('#rec260174013 form button').parent().append('<span class="'+_class+'" style="'+style+'" onclick="q_balance()">УЗНАТЬ</span>');
			$('#rec260174013 form button').css({"display":"none"});
		    clearInterval(delInt);
		}
	}, 1000);
})

q_balance = function() {
	if( $('#rec260174013 form input[type="hidden"][name="Phone"]').val().replace(/\+7/, '').replace(/[^\d]/g, '').length != 10 ){
	    $('#rec260174013 form button').click();
	}else{
	    $('#rec260174013 .js-errorbox-all.t-form__errorbox-wrapper').css({"display":"none"});
	    $('#rec260174013 .t-input-error').text('');
	    $('#rec260174013 .t-form__inputsbox [data-input-lid]').attr('class', 't-input-group t-input-group_ph');
	}
};
