window.onload = function() {

	var img = document.getElementById('img');

	document.querySelector('.js-invert').oninput = function() {
		function contrastImg() {
			var invert = document.querySelector('.js-invert').value;
			img.style.filter = "invert(" + invert + "%)";
		}
		contrastImg();
	}
	
	document.querySelector('.js-brightness').oninput = function() {
		function brightnesstImg() {
			var brightness = document.querySelector('.js-brightness').value;
			img.style.filter = "brightness(" + brightness + "%)";
		}
		brightnesstImg();
	}
	
	document.querySelector('.js-zoom').oninput = function() {
		function zoomImg() {
			var zoom = document.querySelector('.js-zoom').value;
			img.style.width = zoom + "%";
		}
		zoomImg();
	}
	var top = bottom = left = right = 0;
	document.querySelector('.js-top').onclick = function() {
		var thisBtn = img.style.top = -10 * top++ + "%"
		// img.style += '-o-transform: translateY('+  10 * top++ + "%" +');'; 
		console.log(thisBtn);
		if (top == 11) {
			top = 0;
		}
		return top;
	}
	document.querySelector('.js-bottom').onclick = function() {
		var thisBtn1 = img.style.bottom =  -10 * bottom++ + "%";
		console.log(thisBtn1);
		if(bottom == 11) {
			bottom = 0;
		}
	}

}
