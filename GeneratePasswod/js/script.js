//Element Selection

const generatedPasswordButton = document.querySelector('#generate-password')
const generatedPasswordElement = document.querySelector('#generated-password')

//New Functions
const openCloseGenerationButton = document.querySelector('#open-generate-password')
const generatePasswordContainer = document.querySelector('#generate-options')
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
    const symbols = '#$%&*@-_'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatedPassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = ''
    const passwordLength = 10
    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ]

    
    for (let i = 0; i < passwordLength; i = i + 4) {
        
        generators.forEach((value) => {
            
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue
            
        })
    }

    console.log(password)
    generatedPasswordElement.style.display = 'block'
    generatedPasswordElement.querySelector('h4').innerText = password

}


//Events

generatedPasswordButton.addEventListener('click', () => {

    generatedPassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

openCloseGenerationButton.addEventListener('click', () => {
    generatePasswordContainer.classList.toggle('hide')
})

