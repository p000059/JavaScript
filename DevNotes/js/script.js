"use strict"

const notesContainer = document.querySelector('#notes-container')
const noteInput = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('.add-note')

function addNote(){
    
    const noteObject = {
        id : generateID(),
        content : noteInput.value,
        fixed : false
    }

    console.log(`noteObject: ${noteObject.id}`)

}

function generateID(){
    return Math.floor(Math.random() * 5000)
}

addNoteBtn.addEventListener('click', () => addNote())