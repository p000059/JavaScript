function registerEmail() {
    const txtEmail = document.getElementById('txtEmail')
    const msgFeedback = document.getElementById('newsletterFeedback')
    
    msgFeedback.innerHTML = txtEmail.value
}