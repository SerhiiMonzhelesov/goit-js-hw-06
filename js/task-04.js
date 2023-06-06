const counterValue = document.querySelector('#value')

const decrBtn = document.querySelector('button[data-action="decrement"]')
const incrBtn = document.querySelector('button[data-action="increment"]')

let result = 0

decrBtn.addEventListener('click', hendlerDecrement)
incrBtn.addEventListener('click', hendlerIncrement)

function hendlerDecrement() {
    result -= 1;
    counterValue.textContent = result
}

function hendlerIncrement() {
    result += 1;
    counterValue.textContent = result
}






