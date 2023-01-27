const lightmodeBtn = document.querySelector('.header__lightmode-btn');
let lightmodeMedia = window.matchMedia('(prefers-color-scheme: dark)');

const setDarkMode = () => {
	lightmodeBtn.classList.add('header__lightmode-btn--darkmode');
	document.documentElement.classList.add('darkmode');
}

const setLightMode = () => {
	lightmodeBtn.classList.remove('header__lightmode-btn--darkmode');
	document.documentElement.classList.remove('darkmode');
}

if (localStorage.getItem('darkmode') === 'dark'
	|| (window.matchMedia('(prefers-color-scheme: dark)').matches
		&& localStorage.getItem('darkmode') !== 'light')) {
	setDarkMode();
}

lightmodeBtn.addEventListener('click', () => {
	lightmodeBtn.classList.toggle('header__lightmode-btn--darkmode');

	document.documentElement.classList.toggle('darkmode')
		? localStorage.setItem('darkmode', 'dark')
		: localStorage.setItem('darkmode', 'light');
})

lightmodeMedia.addEventListener('change', () => {
	if (lightmodeMedia.matches) {
		setDarkMode();
		localStorage.setItem('darkmode', 'dark');
	} else {
		setLightMode();
		localStorage.setItem('darkmode', 'light');
	}
})