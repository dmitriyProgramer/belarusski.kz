$(document).ready(function() {
	window.delInt1 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('.t-store__prod-popup__btn-wrapper');
		if( sku != '' && in_garbage.length ){
			$(in_garbage).append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000" data-style="desktop"></div>');
			
			if( $('div').is('.ks-widget') ){
				if( !$('script').is('#credit') ){
					sc = '<script id="credit">(function(d, s, id) {';
					sc+= 'var js, kjs;';
					sc+= 'if (d.getElementById(id)) return;';
					sc+= 'js = d.createElement(s);';
					sc+= 'js.id = id;';
					sc+= 'js.src = "https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js";';
					sc+= 'kjs = document.getElementById("credit");';
					sc+= 'kjs.parentNode.insertBefore(js, kjs);}(document, "script", "KS-Widget"));';
					$('body').append(sc);
					$('.t-store__prod-popup__title-wrapper').parent().find('select').attr('onchange', 'newSku()');
					clearInterval(delInt1);
				}
			}
		}
	}, 1000);

	window.priDelInt3 = 0;

	window.delInt3 = setInterval(function(){
		if( $('div').is('.js-store-grid-cont.t-store__grid-cont.t-container.t-store__mobile-two-columns.t-store__grid-cont_mobile-grid') ){
		    $('.js-store-grid-cont.t-store__grid-cont.t-container.t-store__mobile-two-columns.t-store__grid-cont_mobile-grid div').each(function(){
		        $(this).find('a').attr('onclick', 'newSku()');
		    })
		    clearInterval(delInt3);
		}
		if( priDelInt3 == 10 ){ clearInterval(delInt3); }
		priDelInt3++;
	}, 1000);
})

newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#KS-Widget').remove();
	window.delInt2 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('.t-store__prod-popup__btn-wrapper');
		if( sku != '' && in_garbage.length ){
			if( !$('div').is('.ks-widget') ){
				$(in_garbage).append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000" data-style="desktop"></div>');
			}
			if( $('div').is('.ks-widget') ){
				if( !$('script').is('#credit') ){
					sc = '<script id="credit">(function(d, s, id) {';
					sc+= 'var js, kjs;';
					sc+= 'if (d.getElementById(id)) return;';
					sc+= 'js = d.createElement(s);';
					sc+= 'js.id = id;';
					sc+= 'js.src = "https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js";';
					sc+= 'kjs = document.getElementById("credit");';
					sc+= 'kjs.parentNode.insertBefore(js, kjs);}(document, "script", "KS-Widget"));';
					$('body').append(sc);
					$('.t-store__prod-popup__title-wrapper').parent().find('select').attr('onchange', 'newSku()');
					clearInterval(delInt2);
				}
			}
		}
	}, 1000);

	window.priDelInt5 = 0;

	setTimeout(function(){
		window.delInt5 = setInterval(function(){
			in_garbage = $('.t-store__prod-popup__btn-wrapper');
			if( $('div').is('.t-store__prod-popup__btn-wrapper') ){
				if( $('a').is('.whatsapp__com') ) $('.whatsapp__com').remove();
				$($(in_garbage).find('a')[0]).after('<a class="whatsapp__com" style="color:#fff" href="https://api.whatsapp.com/send/?phone=77017154775&text=Здравствуйте, хочу заказать '+location.href+'" target="_blank">Купить в Whatsapp</a>');
				$('.whatsapp__com').css({"font-family":"Futura", "color":"#fff", "display":"block", "width":"232px", "text-align":"center", "background":"#3BBF26", "font-size":"19px", "margin":"0 0 7px 0", "border-radius":"4px", "padding":"11px 0"});
				clearInterval(delInt5);
			}
			if( priDelInt5 == 100 ){ clearInterval(delInt5); }
			priDelInt5++;
		}, 100);
	}, 1000);
}
