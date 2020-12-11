$(document).ready(function() {

	YOU_MAY_ALSO_LIKE();

	window.delInt1 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('.t-store__prod-popup__btn-wrapper');
		if( sku != '' && in_garbage.length ){
			if( !$('div').is('.ks-widget') ){
				$(in_garbage).append('<div class="ks-widget" data-template="flatButton" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000" data-style="desktop"></div>');
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

	setInterval(function(){
	    if( $('a').is('.whatsapp__com') ){
	        url = 'https://api.whatsapp.com/send/?phone=77017154775&text=Здравствуйте, хочу заказать '+location.href
	        $('.whatsapp__com').attr('href', url );
	    }
	},100);

	setInterval(function(){
	    if( $('a').is('.whatsapp__com') ){
	        url = 'https://api.whatsapp.com/send/?phone=77017154775&text=Здравствуйте, хочу заказать '+location.href
	        $('.whatsapp__com').attr('href', url );
	    }
	},100);

	setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
	    if( sku != $('.ks-widget').attr('data-merchant-sku') ){
	        newSku();
	    }
	},500);

})

newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#KS-Widget').remove();
	window.delInt2 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('.t-store__prod-popup__btn-wrapper');
		if( sku != '' && in_garbage.length ){
			if( !$('div').is('.ks-widget') ){
				$(in_garbage).append('<div class="ks-widget" data-template="flatButton" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000" data-style="desktop"></div>');
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

	YOU_MAY_ALSO_LIKE();
}

YOU_MAY_ALSO_LIKE = function(){

	window.priDelInt5 = 0;

	window.itr5 = 0;

	setTimeout(function(){
		window.delInt5 = setInterval(function(){
			in_garbage = $('.t-store__prod-popup__btn-wrapper');
			if( $('div').is('.t-store__prod-popup__btn-wrapper') ){
				if( $('a').is('.whatsapp__com') ) $('.whatsapp__com').remove();
				$($(in_garbage).find('a')[0]).after('<a class="whatsapp__com" style="color:#fff" href="https://api.whatsapp.com/send/?phone=77017154775&text=Здравствуйте, хочу заказать '+location.href+'" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" class="iconify icon:ion-logo-whatsapp" data-inline="false" data-width="1em" data-height="1em" data-icon="ion-logo-whatsapp" style="transform: rotate(360deg);"><path d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48z" fill-rule="evenodd" fill="currentColor"></path></svg>WhatsApp</a>');
				$('.whatsapp__com').css({"position":"relative", "font-family":"Futura", "color":"#fff", "display":"block", "width":"164px", "text-align":"right", "background":"#3BBF26", "font-size":"19px", "margin":"0 0 7px 0", "border-radius":"4px", "padding":"11px 48px 11px 0px"});
				$('.whatsapp__com svg').css({"position":"absolute", "width":"33px", "height":"33px", "top":"4px", "left":"29px"});
				clearInterval(delInt5);
			}
			if( priDelInt5 == 100 ){ clearInterval(delInt5); }
			priDelInt5++;
		}, 100);
	}, 1000);
}
