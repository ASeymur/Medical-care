const darkModeBtn = document.getElementById('dark-mode__btn')
const bodyBg = document.querySelector('.body-bg')
const bgIcon = document.getElementById('bg-icon')


darkModeBtn.addEventListener('click', function () {
    bodyBg.classList.toggle('dark-mode')

    if (bodyBg.classList.contains('dark-mode')) {
        bgIcon.src = 'img/sunny-outline.svg'
    } else {
        bgIcon.src = 'img/moon-outline.svg'
    }
})