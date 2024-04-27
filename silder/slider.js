let currentSlide = 1;

function changeSlide(direction) {
	currentSlide += direction;

	if (currentSlide === 0) {
		currentSlide = 3;
	}
	if (currentSlide === 4) {
		currentSlide = 1;
	}

	const transition = (currentSlide - 1) * 100;

	const slide1 = document.getElementById('slide-1');
	slide1.style.left = transition * -direction + '%';

	console.log(transition * -direction);

	const slide2 = document.getElementById('slide-2');
	slide2.style.left = (transition + 100) * -direction + '%';

	const slide3 = document.getElementById('slide-3');
	slide3.style.left = (transition + 200) * -direction + '%';
}
