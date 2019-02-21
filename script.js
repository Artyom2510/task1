window.onload = function() {

	var img = document.querySelector('.js-img');
	var btn = document.querySelectorAll('.btn');
	var right = document.querySelector('.buttons__right');
	var left = document.querySelector('.buttons__left');
	var top = document.querySelector('.buttons__top');
	var bottom = document.querySelector('.buttons__bottom');
	var middle = document.querySelector('.buttons__middle');
	var state = {
		contrast: 50,
		brightness: 50,
		top: 0,
		left: 0,
		zoom: 100
	}

	function update() {
		img.style.top = state.top + "%";
		img.style.left = state.left + "%";
		img.style.zoom = state.zoom + "%";
		console.log(state.top, state.left, state.brightness, state.contrast, state.zoom);
	}

	function contrastImg() {
		contrast = document.querySelector('.js-contrast').value;
		brightness = document.querySelector('.js-brightness').value;
		img.style.filter = "brightness(" + brightness + "%)" + " contrast(" + contrast + "%)";
		state.contrast = +contrast;
		if( brightness == 50 && contrast == 50 && state.zoom == 100 ) {
			middle.classList.add('btn_stop');
		} else {
			middle.classList.remove('btn_stop');
		}
	}
	function brightnessImg() {
		contrast = document.querySelector('.js-contrast').value;
		brightness = document.querySelector('.js-brightness').value;
		img.style.filter = "brightness(" + brightness + "%)" + " contrast(" + contrast + "%)";
		state.brightness = +brightness;
		if( brightness == 50 && contrast == 50 && state.zoom == 100 ) {
			middle.classList.add('btn_stop');
		} else {
			middle.classList.remove('btn_stop');
		}
	}
	function zoomImg() {
		zoom = document.querySelector('.js-zoom').value;
		state.zoom = +zoom;
		img.style.width = +zoom + "%";
		img.style.height = +zoom + "%";
		middle.classList.remove('btn_stop');
		if( zoom == 100 ) {
			state.left = 0;
			state.top = 0;
			bottom.classList.add('btn_stop');
			top.classList.add('btn_stop');
			left.classList.add('btn_stop');
			right.classList.add('btn_stop');
			// btn.filter(b => b.classList.contains('middle')).forEach( e => {
			// 	if( !e.classList.contains('btn_stop')) {
			// 		e.classList.add('btn_stop');
			// 	}
			// });
			if( state.brightness == 50 && state.contrast == 50 ) {
				middle.classList.add('btn_stop');
			}
			// btn.forEach(e => e.classList.add('btn_stop'));
		 } else {
			top.classList.remove('btn_stop');
			right.classList.remove('btn_stop');
		}
	}

	document.querySelector('.js-contrast').addEventListener('input', function() {
		contrastImg();
		update();
	});
	
	document.querySelector('.js-brightness').addEventListener('input', function() {
		brightnessImg();
		update();
	});

	document.querySelector('.js-zoom').addEventListener('input', function() {
		zoomImg();
		update();
	});

	bottom.addEventListener('click', function() {
		if( state.top < 0 ) {
			state.top += 10;
			top.classList.remove('btn_stop');
			update();
		}
		if( state.top == 0 ) {
			bottom.classList.add('btn_stop');
		}
	});
	top.addEventListener('click', function() {
		if( state.top + state.zoom - 100 > 0 ) {
			state.top -= 10;
			bottom.classList.remove('btn_stop');
			update();
		}
		if( state.top + state.zoom - 100 == 0 ) {
			top.classList.add('btn_stop');
		}
	});
	left.addEventListener('click', function() {
		if( state.left < 0 ) {
			state.left += 10;
			right.classList.remove('btn_stop');
			update();
		}
		if( state.left == 0 ) {
			left.classList.add('btn_stop');
		}
	});
	document.querySelector('.js-right').addEventListener('click', function() {
		if( state.left + state.zoom - 100 > 0 ) {
			state.left -= 10;
			left.classList.remove('btn_stop');
			update();
		}
		if( state.left + state.zoom - 100 == 0 ) {
			right.classList.add('btn_stop');
		}	
	});


	middle.addEventListener('click', function() {
		if( state.zoom != 100 || state.brightness != 50 || state.contrast != 50 ) {
			state.left = 0;
			state.top = 0;
			state.brightness = 50;
			state.contrast = 50;
			state.zoom = 100;
			document.querySelector('.js-zoom').value = 100;
			document.querySelector('.js-contrast').value = 50;
			document.querySelector('.js-brightness').value = 50;
			btn.forEach(e => {
				if( !e.classList.contains('btn_stop') ) {
					e.classList.add('btn_stop');
				}
			});
			contrastImg();
			brightnessImg();
			zoomImg();
			update();
		}
	});

	document.querySelector('.js-block-img').addEventListener('mouseenter', function() {
		document.querySelector('.js-lens').classList.add('display');
		var lens = document.querySelector('.js-lens');

		var widthBlock = document.querySelector('.js-block-img').offsetWidth;
		var heightBlock = document.querySelector('.js-block-img').offsetHeight;
	
		lens.onmousedown = function(e) {
	
			var coords = getCoords(lens);
			var shiftX = e.pageX - coords.left;
			var shiftY = e.pageY - coords.top;
	
			moveAt(e);
	
			function moveAt(e) {
				lens.style.left = e.pageX - shiftX + 'px';
				lens.style.top = e.pageY - shiftY + 'px';
			}
	
			document.onmousemove = function(e) {
				moveAt(e);
			};
	
			lens.onmouseup = function() {
				document.onmousemove = null;
				lens.onmouseup = null;
			};
	
		}
	
		lens.ondragstart = function() {
			return false;
		};
	
		function getCoords(elem) {
			var box = elem.getBoundingClientRect();
			console.log(widthBlock, heightBlock);
			return {
				top: box.top + pageYOffset - widthBlock,
				left: box.left + pageXOffset- widthBlock
			};
		}
	});
	document.querySelector('.js-block-img').addEventListener('mouseleave', function() {
		document.querySelector('.js-lens').classList.remove('display');
	});

}
