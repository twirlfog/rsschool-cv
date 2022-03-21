//TODO: Реализовать вывод в консоль
//TODO: Реализовать возможность включения анимации с установкой задержки и цветов (лишние переменные в функции styler)
/*1) Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
2) Пусть p=2, это первое простое число.
3) Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
4) Поменять значение p на первое не зачеркнутое число после p.
5) Повторить шаги 3-4 пока p2 < n.*/

function createArrayNum(min, max) {
	'use strict';
	var arr = [];
	for (var i = min; i <= max; i++) {
		arr.push(i);
	}
	return arr;
}

function erat() {
	'use strict';
	//1
	var arr = createArrayNum(2, 100);

	//2
	for (var i = 0; i < arr.length; i++) {
		while (arr[i] === ' ') {
			i++;
		}
		for (var p = 2; arr[i] * p <= 100; p++) {
			for (var j = i + 1; j < arr.length; j++) {
				if (arr[j] > arr[i] * p) {
					break;
				}
				if (arr[j] === arr[i] * p) {
					arr[j] = ' ';
				}
			}
		}
	}
	return arr;
}

function parseArray(arrForParse, h, w, style) {
	'use strict';

	function styler(deep, ifBeg, text) {
		var sHtmlBeg = ['<table>', '<tr>', '<td>'];
		var sHtmlEnd = ['</table>', '</tr>', '</td>'];
		var sCon = ['', ' /n', ' '];

		if (deep === undefined || deep === null) {
			if (style === 'html') {
				return window.document.write(text);
			}

			if (style === 'console') {
				return console.log(text);
			}
		}

		if (style === 'html') {
			return ifBeg ? window.document.write(sHtmlBeg[deep]) : window.document.write(sHtmlEnd[deep]);
		}

		if (style === 'console') {
			return console.log(sCon[deep]);
		}
	}

	styler(0, true);
	var ind = 0;
	for (var _line = 1; _line <= h; _line++) {
		styler(1, true);
		if (ind + 1 > arrForParse.length) {
			break;
		}
		for (var _string = 0; _string < w; _string++) {
			styler(2, true);
			if (arrForParse[ind] === undefined) {
				arrForParse[ind] = '';
			}
			styler(null, 1, arrForParse[ind]);
			ind++;
			styler(2, false);
		}
		styler(1, false);
	}
	styler(0, false);
}
//console.log(erat());
parseArray(erat(), 10, 10, 'html');
console.log(erat());