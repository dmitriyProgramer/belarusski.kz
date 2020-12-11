$(document).ready(function() {
	window.delInt = setInterval(function(){
		if( $('#rec260174013 form button').is('[type="submit"]') ){
			style = $('#rec260174013 form button').attr('style')+'padding-top:17px;display:inline-block;';
			_class = $('#rec260174013 form button').attr('class');
			$('#rec260174013 form button').parent().append('<span class="'+_class+'" style="'+style+'" onclick="q_balance()">УЗНАТЬ</span>');
			$('#rec260174013 form button').css({"display":"none"});
            $('#rec260174013 form button').parent().parent().after('<div class="t-form__inputsbox balance"></div>');
			$('#rec260174013 .balance').append('<div class="bal_name"><span>Имя:</span><span></span></div>');
			$('#rec260174013 .balance').append('<div class="bal_total"><span>Остаток баллов на </span><span></span></div>');
		    clearInterval(delInt);
		}
	}, 1000);
})

q_balance = function() {
	card = $('#rec260174013 form input[type="hidden"][name="Phone"]').val().replace(/\+7/, '').replace(/[^\d]/g, '');
	if( card.length != 10 ){
	    $('#rec260174013 form button').click();
	}else{
	    $('#rec260174013 .js-errorbox-all.t-form__errorbox-wrapper').css({"display":"none"});
	    $('#rec260174013 .t-input-error').text('');
	    $('#rec260174013 .t-form__inputsbox [data-input-lid]').attr('class', 't-input-group t-input-group_ph');
		data = {"query":"balance", "card":card};
		$.ajax({
		    url: 'https://technical.ru.com/core/php/core.php',
		    type: "POST",
		    data: data,
		    success: function(answer){
		        arr = $.parseJSON(answer);
		        if(arr['error'] == 0){
		            console.log(arr);
		        }
		    }
		});
	}
};
