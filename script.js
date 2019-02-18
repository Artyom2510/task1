window.onload = function() {

	var img = document.querySelector('.js-img');
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
	}
	function brightnessImg() {
		contrast = document.querySelector('.js-contrast').value;
		brightness = document.querySelector('.js-brightness').value;
		img.style.filter = "brightness(" + brightness + "%)" + " contrast(" + contrast + "%)";
		state.brightness = +brightness;
	}

	function zoomImg() {
		zoom = document.querySelector('.js-zoom').value;
		state.zoom = +zoom;
		img.style.width = +zoom + "%";
		img.style.height = +zoom + "%";
		if( zoom == 100 ) {
			state.left = 0;
			state.top = 0;
			document.querySelectorAll('.btn').forEach(e => e.setAttribute('disabled', ''));
		} else {
			document.querySelectorAll('.btn').forEach(e => e.removeAttribute('disabled'));
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

	document.querySelector('.js-bottom').addEventListener('click', function() {
		img.scrollLeft += 10;
		update();
	});
	document.querySelector('.js-top').addEventListener('click', function() {
		state.top -= 10;
		update();
	});
	document.querySelector('.js-left').addEventListener('click', function() {
		state.left += 10;
		update();
	});
	document.querySelector('.js-right').addEventListener('click', function() {
		state.left -= 10;
		update();
	});


	document.querySelector('.js-middle').addEventListener('click', function() {
		state.left = 0;
		state.top = 0;
		state.brightness = 50;
		state.contrast = 50;
		state.zoom = 100;
		document.querySelector('.js-zoom').value = 100;
		document.querySelector('.js-contrast').value = 50;
		document.querySelector('.js-brightness').value = 50;
		contrastImg();
		brightnessImg();
		zoomImg();
		update();
	});

}
