const textInput = document.querySelector('#name-input')
const newUserName = document.querySelector('#name-output')

textInput.addEventListener('input', event =>
    newUserName.textContent = event.currentTarget.value || 'Anonymous')
