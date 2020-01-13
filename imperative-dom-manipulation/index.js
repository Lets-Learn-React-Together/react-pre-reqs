const button = document.querySelector('button')
const paragraph = document.querySelector('p')

const turnRed = () => {
    paragraph.classList.contains('red')
        ? paragraph.classList.remove('red')
        : paragraph.classList.add('red')

    paragraph.classList.contains('red')
        ? button.textContent = 'Turn black!'
        : button.textContent = 'Turn red!'
}

button.addEventListener('click', turnRed)