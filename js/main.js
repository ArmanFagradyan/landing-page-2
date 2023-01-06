/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile__nav__button');
const mobileNavIcon = document.querySelector('.mobile__nav__button__icon');
const mobileNav = document.querySelector('.mobile__nav');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
	document.body.classList.toggle('no__scroll');
});

/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('#video__story__btn');
const videoBtnIcon = document.querySelector('#video__story__btn__icon');
const videoOverlay = document.querySelector('#video__story__overlay');
const videoFile = document.querySelector('#video__story');

videoBtn.addEventListener('click', function () {

	function toggleOverlay(event){
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden');
		} else {
			videoOverlay.classList.remove('hidden');
		}
	}

	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = './img/story/pause-white.svg';

		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause();
		videoBtnIcon.src = './img/story/play-white.svg';
		videoOverlay.onmouseleave = null;
		videoOverlay.onmouseenter = null;

	}

});
