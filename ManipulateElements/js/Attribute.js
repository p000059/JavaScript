"use strict"

const linkGoogle = document.querySelector('#link-google')

const actualLink = document.querySelector('#actual-link')

console.log(`Link Actual: ${actualLink.getAttribute('href')}`)

linkGoogle.setAttribute('href','https://www.google.com.br')
linkGoogle.setAttribute('target', '_blank')

console.log(`New Link: ${linkGoogle.getAttribute('href')}`)