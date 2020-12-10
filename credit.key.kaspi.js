$(document).ready(function() {
	console.log('credit');
	window.delInt1 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('div[tt="В корзину"]');
		if( sku != '' && in_garbage.length ){
			$(in_garbage).append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
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
	}, 1000);
})

newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#KS-Widget').remove();
	window.delInt2 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		in_garbage = $('div[tt="В корзину"]');
		if( sku != '' && in_garbage.length ){
			$(in_garbage).append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
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
	}, 100);
}



