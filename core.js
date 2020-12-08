$(document).ready(function() {
	if( /test=true/.test( location.search ) ){
		$('head').append('<link rel="stylesheet" href="https://dmitriyprogramer.github.io/belarusski.kz/style.css">');
		$('#rec258526460').append('<body><div class="calcblock"><div class="calcblock-content"><div class="calcblock-h1">Определи свой размер</div><div class="calcblock-p">Заполнив свои параметры, Вы можете определить свой точный размер.</div><div class="calcblock-table"><div class="calcblock-row"><div class="calcblock-num">1</div><div class="calcblock-val">Обхват груди:</div><div class="calcblock-lab">cм</div><input type="text" class="calcblock-input"></div><div class="calcblock-row"><div class="calcblock-num">2</div><div class="calcblock-val">Обхват под грудью:</div><div class="calcblock-lab">cм</div><input type="text" class="calcblock-input"></div><div class="calcblock-row"><div class="calcblock-num">3</div><div class="calcblock-val">Обхват бедер:</div><div class="calcblock-lab">cм</div><input type="text" class="calcblock-input"></div></div><button class="calcblock-btn" onclick="calc()">Рассчитать</button><div class="calcblock-result"><div class="calcblock-result-item"><div class="calcblock-result-title">Ваш размер бюстгальтера:</div><div class="calcblock-result-res"><div class="calcblock-result-res-item"><div class="calcblock-result-val"></div></div></div></div><div class="calcblock-result-item"><div class="calcblock-result-title">Ваш размер трусиков:</div><div class="calcblock-result-res"><div class="calcblock-result-res-item"><div class="calcblock-result-lab">CIS</div><div class="calcblock-result-val"></div></div><div class="calcblock-result-res-item"><div class="calcblock-result-lab">EU</div><div class="calcblock-result-val"></div></div></div></div></div></div><div class="calcblock-bulits"><div class="calcblock-bulit calcblock-bulit-1">1</div><div class="calcblock-bulit calcblock-bulit-2">2</div><div class="calcblock-bulit calcblock-bulit-3">3</div></div></div>');
	}else{
		$('#rec258526460').css({"display":"none"});
	}
});

calc = function() {
	o = {"65 63-67":["AA 75-77", "A 77-79", "B 79-81", "C 81-83", "D 83-85", "E 85-87", "F 87-89", "G 89-91", "H 91-93", "I 93-95", "J 95-97"],
	"70 68-72":["AA 80-82", "A 82-84", "B 84-86", "C 86-88", "D 88-90", "E 90-92", "F 92-94", "G 94-96", "H 96-98", "I 98-100", "J 100-102"],
	"75 73-77":["AA 85-87", "A 87-89", "B 89-91", "C 91-93", "D 93-95", "E 95-97", "F 97-99", "G 99-101", "H 101-103", "I 103-105", "J 105-107"],
	"80 78-82":["AA 90-92", "A 92-94", "B 94-96", "C 96-98", "D 98-100", "E 100-102", "F 102-104", "G 104-106", "H 106-108", "I 108-110", "J 110-112"],
	"85 83-87":["AA 95-97", "A 97-99", "B 99-101", "C 101-103", "D 103-105", "E 105-107", "F 107-109", "G 109-111", "H 111-113", "I 113-115", "J 115-117"],
	"90 88-92":["AA 100-102", "A 102-104", "B 104-106", "C 106-108", "D 108-110", "E 110-112", "F 112-114", "G 114-116", "H 116-118", "I 118-120", "J 120-122"],
	"95 93-97":["", "A 107-109", "B 109-111", "C 111-113", "D 113-115", "E 115-117", "F 117-119", "G 119-121", "H 121-123", "I 123-125", "J 125-127"],
	"100 98-102":["", "A 112-114", "B 114-116", "C 116-118", "D 118-120", "E 120-122", "F 122-124", "G 124-126", "H 126-128", "I 128-130", "J 130-132"],
	"105 103-107":["", "A 117-119", "B 119-121", "C 121-123", "D 123-125", "E 125-127", "F 127-129", "G 129-131", "H 131-133", "I 133-135", "J 135-137"],
	"110 108-112":["", "A 122-124", "B 124-126", "C 126-128", "D 128-130", "E 130-132", "F 132-134", "G 134-136", "H 136-138", "I 138-140", "J 140-142"],
	"115 113-117":["", "", "B 129-131", "C 131-133", "D 133-135", "E 135-137", "F 137-139", "G 139-141", "H 141-143", "I 143-145", "J 145-147"],
	"120 118-122":["", "", "B 134-136", "C 136-138", "D 138-140", "E 140-142", "F 142-144", "G 144-146", "H 146-148", "I 148-150", "J 150-152"]}

	at = [["84-88", "88-92", "92-96", "96-100", "100-104", "104-108", "108-112", "112-116", "116-120", "120-124", "124-128", "128-132", "132-136"],
["86", "90", "94", "98", "102", "106", "110", "114", "118", "122", "126", "130", "134"],
["34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"]];

	a1 = $($('.calcblock-row')[0]).find('.calcblock-input').val()*1;
	a2 = $($('.calcblock-row')[1]).find('.calcblock-input').val()*1;
	a3 = $($('.calcblock-row')[2]).find('.calcblock-input').val()*1;
	if( a1 != '' && a2 != '' ){
		numeric = '?';
		letter = '?';
		for( i in o ){
		    arr = i.split(' ');
		    num = arr[1].split('-');
		    if( num[0]*1 <= a2 && a2 <= num[1]*1 ){ numeric = arr[0]; }
		    for( x in o[i] ){
		        if( o[i][x] != '' ){
		            arr2 = o[i][x].split(' ');
		            num2 = arr2[1].split('-');
		            if( num2[0]*1 <= a1 && a1 <= num2[1]*1 ){ letter = arr2[0]; }
		        }
		        
		    }
		}
		$($('.calcblock-result-res-item')[0]).find('.calcblock-result-val').text(numeric+'-'+letter);
	}
	if( a3 != '' ){
		CIS = EU = '?';
		for( i in at[0] ){
		    arr = at[0][i].split('-');
		    if( arr[0]*1 <= a3 && a3 <= arr[1]*1 ){ CIS = at[1][i]; EU = at[2][i];}
		}
		$($('.calcblock-result-res-item')[1]).find('.calcblock-result-val').text(CIS);
		$($('.calcblock-result-res-item')[2]).find('.calcblock-result-val').text(EU);
	}
}
