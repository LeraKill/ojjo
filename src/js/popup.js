window.onload = function () {
	const body = document.querySelector('body');
	const openPopupButtons = document.querySelectorAll('.popup__open');

	if (openPopupButtons.length > 0) {
		for (let i = 0; i < openPopupButtons.length; i++) {
			let openPopupButton = openPopupButtons[i];
			openPopupButton.addEventListener('click', function (e) {
				e.preventDefault();
				const popupName = openPopupButton.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				openPopup(curentPopup);
			})
		}
	}

	const closePopupButtons = document.querySelectorAll('.close-popup');

	if (closePopupButtons.length > 0) {
		for (let i = 0; i < closePopupButtons.length; i++) {
			const closePopupButton = closePopupButtons[i];
			closePopupButton.addEventListener('click', function (e) {
				e.preventDefault();
				closePopup(closePopupButton.closest('.popup'));
			})
		}
	}

	function openPopup(curentPopup) {
		if (curentPopup) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				closePopup(popupActive);
			}
		}
		curentPopup.classList.add('open');
		body.classList.add('_lock');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				closePopup(e.target.closest('.popup'));
			}
		})
	}

	function closePopup(popupActive) {
		popupActive.classList.remove('open');
		body.classList.remove('_lock')
	}
}

