const submitForm = document.querySelector('.login-form')

submitForm.addEventListener('submit', handlerSubmit)

function handlerSubmit(event) {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        return alert('Please fill in all fields!')
    }

    console.log(` email: ${email.value} \n password: ${password.value}`);
    event.currentTarget.reset()

}


