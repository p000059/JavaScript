//Element Selection

const generatedPasswordButton = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')

//New Functions
const showHelp = document.querySelector('#show-help')
const generateOptions = document.querySelector('#generate-options')

const lengthInput = document.querySelector('#length')
const lettersInput = document.querySelector('#letters')
const numbersInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')

const copyPasswordButton = document.querySelector('#copy-password')

//Functions

const getLetterLowerCase = () => {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = () => {

    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = () => {

    return Math.floor(Math.random() * 10).toString()
}

const getSymbol = () => {
    const symbols = '#$%&*@'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatedPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = ''
    const passwordLength = +lengthInput.value
    const generators = []

    /*  switch (generators) {
         case lettersInput.checked:
             generators.push(getLetterLowerCase, getLetterUpperCase)
 
         case numbersInput.checked:
             generators.push(getLetterLowerCase, getLetterUpperCase)
 
         case symbolsInput.checked:
             generators.push(getSymbol)
 
         default:
             generators.push(0)
     } */

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if (numbersInput.checked) {
        generators.push(getNumber)
    }

    if (symbolsInput.checked) {
        generators.push(getSymbol)
    }

    if (generators.length === 0) {
        return
    }


    for (let i = 0; i < passwordLength; i = i + generators.length) {

        generators.forEach((value) => {

            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue

        })
    }

    console.log(password)
    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('#new-password').innerText = password

}


//Events

generatedPasswordButton.addEventListener('click', () => {
    generatedPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

showHelp.addEventListener('click', () => {
    generateOptions.classList.toggle('hide')
})

copyPasswordButton.addEventListener('click', (e) => {

    e.preventDefault()

    const password = document.querySelector('#new-password').innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = 'Senha Copiada'

        
        setTimeout(() => {
            copyPasswordButton.innerText = 'copiar'
        },1000)
    })
    
    document.querySelector('#password').innerText = password
    document.querySelector('#confirmpassword').innerText = password
})
