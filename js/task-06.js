const textInput = document.querySelector('#validation-input')

textInput.addEventListener('blur', event => {

    const validLength = Number(textInput.dataset.length)
    const textLength = event.target.value.length

    if (textLength === validLength) {
        textInput.classList.add("valid")
        textInput.classList.remove("invalid")
    } else {
        textInput.classList.remove("valid")
        textInput.classList.add("invalid")
    }   

})

