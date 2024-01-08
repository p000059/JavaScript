document.addEventListener('DOMContentLoaded', function () {

	let registerButton = document.querySelector('#register-button');
	let closeConfirmationButton = document.querySelector('#close-confirmation-button');
	let closeModalButton = document.querySelector('#close-modal-button');
	let clearFields = document.querySelector('#clear-fields')


	registerButton.addEventListener('click', register);
	closeConfirmationButton.addEventListener('click', closeConfirmationModal);
	closeModalButton.addEventListener('click', closeConfirmationModal);
	clearFields.addEventListener('click', clearField)
});

function clearField() {

	document.getElementById('name').value = ''
	document.getElementById('code').value = ''
	document.getElementById('description').value = ''
	document.getElementById('value').value = ''

}

function register() {

	let name = document.querySelector('#name').value;
	let code = document.querySelector('#code').value;
	let description = document.querySelector('#description').value;
	let value = document.querySelector('#value').value;

	let codeCapitalize = code.toUpperCase()

	let url = 'http://localhost:8088/orcamento/insertpart'

	let data = {
		code: codeCapitalize,
		name: name,
		description: description,
		value: value
	}

	makeFetchPostRequest(url, data)

	showConfirmationModal();
}

function showConfirmationModal() {
	let modal = document.querySelector('#confirmation-modal');
	modal.style.display = 'block';
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
	let modal = document.querySelector('#confirmation-modal');
	modal.style.display = 'none';
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function makeFetchPostRequest(url, data) {

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json(); // This returns a promise
		})
		.then(data => {
			console.log(`Data: ${data}`)
		})
		.catch(error => {
			console.error('Fetch Error:', error);
			throw error;
		});
}




