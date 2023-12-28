let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => register(event))

let clear = document.querySelector('#clear-fields')
clear.addEventListener('click', () => clearFields())

let closeModal = document.querySelector('#button-close')
execute.addEventListener('click', () => closeConfirmationModal())

function register(event) {

	event.preventDefault()
	event.stopPropagation()

	// Get input values
	var name = document.querySelector('#name').value;
	var code = document.querySelector('#code').value;
	var description = document.querySelector('#description').value;
	var value = document.querySelector('#value').value;

	// Display confirmation modal with user details
	var confirmationMessage = `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Código:</strong> ${code}</p>
      <p><strong>Descrição:</strong> ${description}</p>
	  <p><strong>Preço:</strong> ${value}</p>
      <p>Cadastrado com Sucesso!</p>
    `;

	document.querySelector('#confirmationMessage').innerHTML = confirmationMessage;
	showConfirmationModal();
}

function showConfirmationModal() {
	var modal = document.querySelector('#confirmationModal');
	modal.style.display = 'block';
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
	var modal = document.querySelector('#confirmationModal');
	modal.style.display = 'none';
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function clearFields() {

	document.querySelector('#name').value = ''
	document.querySelector('#code').value = ''
	document.querySelector('#description').value = ''
	document.querySelector('#value').value = ''

}

/* 
function registerPart(event) {

	event.preventDefault()
	event.stopPropagation()

	let code = ""
	let name = ""
	let description = ""
	let value = 0

	code = document.querySelector('#code').value
	name = document.querySelector('#name').value
	description = document.querySelector('#description').value
	value = document.querySelector('#value').value

	let codeCapitalize = code.toUpperCase()

	let url = 'http://localhost:8088/orcamento/insertpart';

	let data = {
		code: codeCapitalize,
		name: name,
		description: description,
		value: value
	};

	makeFetchPostRequest(url, data)

	createLabel(document.querySelector('#result').innerHTML = data)
	closeModal()

}

function clearFields() {

	document.querySelector('#firstName').value = ''
	document.querySelector('#lastName').value = ''
	document.querySelector('#email').value = ''
	document.querySelector('#password').value = ''
}

function createLabel(object) {
	let label = document.createElement('label')
	label.className = 'labels'
	label.textContent = object
	return label
}

/* function closeModal() {

	let modal = document.querySelector('#modal-confirm')
	modal.style.display = 'none'
} */

/* function makeFetchPostRequest(url, data) {

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
			return response.json();
		})
		.then(data => {

			console.log(data);
		})
		.catch(error => {

			console.error('Fetch Error:', error);
		});
}
 */