
let showConfirm = document.querySelector('#confirmAction')
let showCancel = document.querySelector('#cancelAction')

showConfirm.addEventListener('click', () => confirmAction())
showConfirm.addEventListener('click', () => cancelAction())

function showConfirmation() {
    // Display the modal overlay
    document.querySelector('#overlay').style.display = 'flex';
}

function confirmAction() {
    // Perform the action when the user clicks "Yes"
    alert('Action confirmed!');
    // You can replace the alert with your custom action
    // ...

    // Hide the modal overlay
    hideConfirmation();
}

function cancelAction() {
    // Perform the action when the user clicks "No"
    alert('Action canceled!');
    // You can replace the alert with your custom action
    // ...

    // Hide the modal overlay
    hideConfirmation();
}

function hideConfirmation() {
    // Hide the modal overlay
    document.querySelector('#overlay').style.display = 'none';
}