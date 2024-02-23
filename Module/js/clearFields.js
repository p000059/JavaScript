function clearFields() {
	
    document.querySelector('#number').value = ''
    document.querySelector('#result').innerHTML = ''
	document.querySelector('#words').value = ''
}

export { clearFields }