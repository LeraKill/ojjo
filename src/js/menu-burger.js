const menuIcon = document.querySelector('.menu__icon');


if (menuIcon) {
	const menuBody = document.querySelector('.menu__body');

	menuIcon.addEventListener('click', function (e) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	})
}