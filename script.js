window.onload = function() {

	var img = document.querySelector('.js-img');
	var zoom = document.querySelector('.js-zoom').value;
	var pos = {
		top: 0,
		left: 0
	};

	document.querySelector('.js-contrast').oninput = function() {
		function contrastImg() {
			var contrast = document.querySelector('.js-contrast').value;
			var brightness = document.querySelector('.js-brightness').value;
			img.style.filter = "brightness(" + brightness + "%)" + " contrast(" + contrast + "%)";
		}
		contrastImg();
	}
	
	document.querySelector('.js-brightness').oninput = function() {
		function brightnesstImg() {
			var contrast = document.querySelector('.js-contrast').value;
			var brightness = document.querySelector('.js-brightness').value;
			img.style.filter = "brightness(" + brightness + "%)" + " contrast(" + contrast + "%)";
		}
		brightnesstImg();
	}
	
	document.querySelector('.js-zoom').oninput = function() {
		function zoomImg() {
			zoom = document.querySelector('.js-zoom').value;
			img.style.width = +zoom + 50 + "%";
			img.style.height = +zoom + 50 + "%";
			if(zoom > 50) {
				update();
			}
			// if(zoom > 50) {
			// 	heightImg = img.offsetHeight;
			// 	freePlaceTop = heightBlock - heightImg;
			// 	console.log(freePlaceTop);
			// }
		}
		zoomImg();
	}

	// function move() {
	// 	// var zoom = document.querySelector('.js-zoom').value;
	// 	console.log(zoom);
	// 	if(zoom > 50) {
	// 		function update() {
	// 			img.style.top = pos.top + "%";
	// 			img.style.left = pos.left + "%";
	// 		}
	// 		document.querySelector('.js-top').onclick = function() {
	// 			pos.top -= 10;
	// 			update();
	// 		}
	// 		document.querySelector('.js-bottom').onclick = function() {
	// 			pos.top += 10;
	// 			update();
	// 		}
	// 		document.querySelector('.js-left').onclick = function() {
	// 			pos.left += 10;
	// 			update();
	// 		}
	// 		document.querySelector('.js-right').onclick = function() {
	// 			pos.left -= 10;
	// 			update();
	// 		}
	// 		document.querySelector('.js-middle').onclick = function() {
	// 			pos.left = 0;
	// 			pos.top = 0;
	// 			update();
	// 		}
	// 	}
	// }

	function update() {
		img.style.top = pos.top + "%";
		img.style.left = pos.left + "%";
	}
	document.querySelector('.js-top').onclick = function() {
		pos.top -= 10;
	}
	document.querySelector('.js-bottom').onclick = function() {
		pos.top += 10;
		update();
	}
	document.querySelector('.js-left').onclick = function() {
		pos.left += 10;
		update();
	}
	document.querySelector('.js-right').onclick = function() {
		pos.left -= 10;
		update();
	}
	document.querySelector('.js-middle').onclick = function() {
		pos.left = 0;
		pos.top = 0;
		update();
	}
}
