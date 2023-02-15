(function () {

    const txtTitle = document.getElementById('txtTitle')
    const btn = document.getElementById('btn')

    const resgistration_form = document.querySelector('.registration-form')

    resgistration_form.addEventListener('submit', function(e){
        console.log(txtTitle.value)
        if(!txtTitle.value){
            alert('Fill in all fields')
            e.preventDefault()
            txtTitle.focus()
        }
    })
})()


