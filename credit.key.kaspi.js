$(document).ready(function() {
	setTimeout(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
		sc = "<script id='credit'>(function(d, s, id) {";
		sc+= "var js, kjs;";
		sc+= "if (d.getElementById(id)) return;";
		sc+= "js = d.createElement(s);";
		sc+= "js.id = id;";
		sc+= "js.src = 'https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js';";
		sc+= "kjs = document.getElementById('credit');";
		sc+= "kjs.parentNode.insertBefore(js, kjs);";
		sc+= "}(document, 'script', 'KS-Widget'));</script>";
		$('body').append(sc);
		$('.t-store__prod-popup__title-wrapper').parent().find('select').attr('onchange', 'newSku()');
	}, 1000);
});

newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#KS-Widget').remove();
	setTimeout(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
		sc = "<script id='credit'>(function(d, s, id) {";
		sc+= "var js, kjs;";
		sc+= "if (d.getElementById(id)) return;";
		sc+= "js = d.createElement(s);";
		sc+= "js.id = id;";
		sc+= "js.src = 'https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js';";
		sc+= "kjs = document.getElementById('credit');";
		sc+= "kjs.parentNode.insertBefore(js, kjs);";
		sc+= "}(document, 'script', 'KS-Widget'));</script>";
		$('body').append(sc);
	}, 1000);
}
