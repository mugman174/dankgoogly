const showSection = document.querySelector('#hlink')
const hideSection = document.querySelector('#hlink')
const pageSection = document.querySelector('#hpage')

showSection.addEventListener('click', function() {
    pageSection.classList.add('visible')
})

hideSection.addEventListener('click', function() {
    pageSection.classList.remove('visible')
})