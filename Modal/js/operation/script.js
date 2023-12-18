let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => registerPart(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => clearFields())

function registerPart(event) {

	event.preventDefault()
	event.stopPropagation()

	clearFields()

	let code = document.querySelector('#code').value
	let name = document.querySelector('#name').value
	let description = document.querySelector('#description').value
	let value = document.querySelector('#value').value

	let codeCapitalize = code.toUpperCase()
	let nameCapitalize = name[0].toUpperCase() + name.substring(1)
	let descriptionLowerCase = description.toLowerCase()

	let url = 'http://localhost:8088/orcamento/insertpart';

	let data = {
		code: codeCapitalize,
		name: nameCapitalize,
		description: descriptionLowerCase,
		value: value
	};

	createLabel(document.querySelector('#result').innerHTML = makeFetchPostRequest(url, data))

}

function clearFields() {

	document.querySelector('#code').innerHTML = ''
	document.querySelector('#name').innerHTML = ''
	document.querySelector('#description').innerHTML = ''
	document.querySelector('#value').innerHTML = ''
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
			return response.json();
		})
		.then(data => {

			console.log(data);
            return data;
		})
		.catch(error => {

			console.error('Fetch Error:', error);
		});
}

function createLabel(data){

    document.querySelector('#res-code').innerHTML = data.code
    document.querySelector('#res-name').innerHTML = data.name
    document.querySelector('#res-description').innerHTML = data.description
    document.querySelector('#res-value').innerHTML = data.value
}