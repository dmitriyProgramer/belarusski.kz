$(document).ready(function() {
	setTimeout(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
		$('body').append('<script id="credit"></script>');
		$('#credit').html('(function(d, s, id) { var js, kjs;  if (d.getElementById(id)) return;  js = d.createElement(s);  js.id = id; js.src = "https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js";  kjs = document.getElementById("credit"); kjs.parentNode.insertBefore(js, kjs); }(document, "script", "KS-Widget"));');
		$('.t-store__prod-popup__title-wrapper').parent().find('select').attr('onchange', 'newSku()');
	}, 1000);
});


newSku = function(){
	$('.ks-widget').remove(); $('#credit').remove(); $('#ks-widget').remove(); 
	setTimeout(function(){
		sku = $(".t-store__prod-popup__title-wrapper .js-store-prod-sku.js-product-sku").text();
		$('div[tt="В корзину"]').append('<div class="ks-widget" data-template="button" data-merchant-sku="'+sku+'" data-merchant-code="Belarusskoe" data-city="750000000"></div>');
		$('body').append('<script id="credit"></script>');
		$('#credit').html('(function(d, s, id) { var js, kjs;  if (d.getElementById(id)) return;  js = d.createElement(s);  js.id = id; js.src = "https://kaspi.kz/kaspibutton/widget/ks-wi_ext.js";  kjs = document.getElementById("credit"); kjs.parentNode.insertBefore(js, kjs); }(document, "script", "KS-Widget"));');
	}, 1000);
}
