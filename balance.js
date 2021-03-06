$(document).ready(function() {
	window.delInt = setInterval(function(){
		if( $('#rec260174013 form button').is('[type="submit"]') ){
			style = $('#rec260174013 form button').attr('style')+'padding-top:17px;display:inline-block;';
			_class = $('#rec260174013 form button').attr('class');
			$('#rec260174013 form button').parent().append('<span class="'+_class+'" style="'+style+'" onclick="q_balance()">УЗНАТЬ</span>');
			$('#rec260174013 form button').css({"display":"none"});
            $('#rec260174013 form button').parent().parent().after('<div class="t-form__inputsbox balance" style="margin-top:18px;font-family: \'Futura\';font-size: 17px;font-weight: 500;"></div>');
			$('#rec260174013 .balance').append('<div class="bal_name" style="display: flex;"><span style="width:230px;flex-shrink:0;padding-top: 1px;">Имя:</span><span style="border:solid 0.01em #c9c9c9;flex-grow:1;padding-left: 7px;"></span></div>');
			$('#rec260174013 .balance').append('<div class="bal_total" style="display: flex;margin-top: 7px;"><span style="width:230px;flex-shrink:0;padding-top: 1px;">Остаток баллов:</span><span style="border:solid 0.01em #c9c9c9;flex-grow:1;padding-left: 7px;"></span></div>');
			$('#rec260174013 .balance').append('<div class="bal_date" style="display: flex;margin-top: 7px;"><span style="width:230px;flex-shrink:0;padding-top: 1px;">Время и дата:</span><span style="border:solid 0.01em #c9c9c9;flex-grow:1;padding-left: 7px;"></span></div>');
		    clearInterval(delInt);
		}
	}, 1000);
})

$(document).keydown(function(e) {
    if( e.keyCode === 13 ) {
        e.preventDefault();
        q_balance();
    }
});


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function XFormatPrice(_number) 
{
    var decimal=0;
    var separator=' ';
    var decpoint = '.';
    var format_string = '#';
 
    var r=parseFloat(_number)
 
    var exp10=Math.pow(10,decimal);
    r=Math.round(r*exp10)/exp10;
 
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
		        	if( typeof arr['balance'] == 'object' ){
						name = arr['balance']['OWNER'];
						z = 8
						for(x = 0; x < z; x++ ){
							i = randomInteger(0, name.length-1);
							if( !/\s/.test(name[i]) ) name = name.replace(name[i], '*');
							else z+=1;
						}
						name = name.substr(0, 13);
						balence = XFormatPrice(arr['balance']['RESIDUE']);
						dat = '8:00 '+arr['data'];
					}else{
						name = 'Не найдено';
						balence = 'Не найдено';
						dat = 'Не найдено';
					}
					$($('.bal_name span')[1]).text(name);
					$($('.bal_total span')[1]).text(balence);
					$($('.bal_date span')[1]).text(dat);
		        }
		    }
		});
	}
};
