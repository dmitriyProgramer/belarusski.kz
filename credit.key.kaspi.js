/*$(document).ready(function() {
	console.log('credit');
	delInt1 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		if( sku != '' ){
			$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
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
	}, 100);
});*/

insertCreditKey = function() {
	console.log('credit');
	delInt1 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		if( sku != '' ){
			$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
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
	}, 100);
};
insertCreditKey();

newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#KS-Widget').remove();
	delInt2 = setInterval(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		if( sku != '' ){
			$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
			sc = '<script id="credit">(function(d, s, id) {';
			sc+= 'var js, kjs;';
			sc+= 'if (d.getElementById(id)) return;';
			sc+= 'js = d.createElement(s);';
			sc+= 'js.id = id;';
			sc+= 'js.src = "https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js";';
			sc+= 'kjs = document.getElementById("credit");';
			sc+= 'kjs.parentNode.insertBefore(js, kjs);}(document, "script", "KS-Widget"));';
			$('body').append(sc);
			clearInterval(delInt2);
		}
	}, 100);
}
