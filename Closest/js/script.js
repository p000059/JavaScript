
// Get the element with id "target"
var targetElement = document.getElementById("target");

// Find the closest ancestor with class "container"
var closestContainer = targetElement.closest(".container");

// Add a highlight class to the closest container
closestContainer.classList.add("highlight");

let targetElementExclude = document.querySelector('#delete-div')
console.log(targetElementExclude)

targetElementExclude.addEventListener('click', (e) => {
    
    e.preventDefault()
    
    let parentElement = document.querySelector('#text')
    
    parentElement.classList.add('highlight')
    
})
