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


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function XFormatPrice(_number) 
{
    var decimal=0;
    var separator=' ';
    var decpoint = '.';
    var format_string = '#.00';
 
    var r=parseFloat(_number)
 
    var exp10=Math.pow(10,decimal);// приводим к правильному множителю
    r=Math.round(r*exp10)/exp10;// округляем до необходимого числа знаков после запятой
 
    rr=Number(r).toFixed(decimal).toString().split('.');
 
    b=rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);
 
    r=(rr[1]?b+ decpoint +rr[1]:b);
    return format_string.replace('#', r);
}

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
					name = arr['balance']['OWNER'];
					for(x = 0; x < 8; x++ ){
					    i = randomInteger(0, name.length-1);
					    name = name.replace(name[i], '*');
					}
                    $($('.bal_name span')[1]).text(name);
                    $($('.bal_total span')[1]).text(XFormatPrice(arr['balance']['RESIDUE']));

		        }
		    }
		});
	}
};
