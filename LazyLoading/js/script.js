"use strict"

const images = document.querySelectorAll('.image-container img')

images.forEach((image) => {
    console.log(image.alt)
})

/* for(let image of images){
    
    if(image.getAttribute('alt') === 'Forest6'){
        console.log(image.getAttribute('alt'))
        break
    }
} */