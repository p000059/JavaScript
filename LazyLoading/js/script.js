"use strict"

const images = document.querySelectorAll('.image-container img')

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return

        const image = entry.target

        image.src = image.src.replace("&w10", "&w=1000")
    })
}, {})

images.forEach((image) => {
    observer.observe(image)
})
