const dropDowns = document.querySelectorAll('.dropdown');

for (let i = 0; i < dropDowns.length; i++) {
	let dropDownWrapper = dropDowns[i];

	const dropdownButton = dropDownWrapper.querySelector('.dropdown__button');
	const dropdownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropdownItems = dropdownList.querySelectorAll('.dropdown__list-item');

	// Клик по кнопке - открываем список
	dropdownButton.addEventListener('click', function () {
		dropdownButton.classList.add('dropdown__button--actives');
		dropdownList.classList.toggle('_visible');
	});

	// Выбираем значение из списка, запомнить выбранное значение, закрыть список

	for (let i = 0; i < dropdownItems.length; i++) {
		let listItem = dropdownItems[i];
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();

			dropdownButton.innerText = this.innerText;
			dropdownButton.focus();

			const dropdownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
			dropdownInput.value = this.dataset.value;

			dropdownList.classList.remove('_visible');
		})
	}



	//При клике снаружи закрыть дропдаун
	document.addEventListener('click', function (e) {

		if (e.target !== dropdownButton) {
			dropdownButton.classList.remove('dropdown__button--actives');
			dropdownList.classList.remove('_visible');
		}
	})

	//При клике на Tab или Escape закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropdownButton.classList.remove('dropdown__button--actives');
			dropdownList.classList.remove('_visible');
		}
	})

}


