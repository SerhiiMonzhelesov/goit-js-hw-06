const inputRange = document.querySelector('#font-size-control')

const textForRange = document.querySelector('#text')


inputRange.addEventListener('input', event => {

    textForRange.style.fontSize = `${event.target.value}px`
    
})
