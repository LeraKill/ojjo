document.addEventListener('DOMContentLoaded', function () {
	const formWrappers = document.querySelectorAll('.form-wrapper');

	if (formWrappers.length > 0) {
		for (let i = 0; i < formWrappers.length; i++) {
			let formWrapper = formWrappers[i];

			const form = formWrapper.querySelector('.form');

			form.addEventListener('submit', sendForm);

			async function sendForm(e) {
				e.preventDefault();


				let error = validateForm(form);
				let formData = new FormData(form);

				if (error === 0) {
					let url = 'http://localhost:8081/index.php';
					let response = await fetch(url, {
						method: "POST",
						headers: {
							'Content-Type': 'application/json;charset=utf-8'
						},
						body: formData,
					});
					if (response.ok) {
						let result = await response.json();
						alert(result.message);
						form.reset();
					} else {
						formWrapper.querySelector('.sending-error').innerHTML += '<span>Произошла ошибка</span>'
					}
				}

			}
			function validateForm(form) {
				let error = 0;
				let formReq = formWrapper.querySelectorAll('._req');

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i];
					removeErrorForm(input);

					if (input.classList.contains('_email')) {
						const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
						if (!re.test(String(input.value).toLowerCase())) {
							addErrorForm(input);
							error++;
						}
					} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
						addErrorForm(input);
						error++;
					} else {
						if (input.value === '') {
							addErrorForm(input);
							error++;
						}
					}
				}
				return error
			}

			function addErrorForm(input) {
				input.parentElement.classList.add('_error');
				input.classList.add('_error');
			}
			function removeErrorForm(input) {
				input.parentElement.classList.remove('_error');
				input.classList.remove('_error');
			}


		}
	}
})






