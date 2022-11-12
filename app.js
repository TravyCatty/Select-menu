const select = document.querySelector('.select')
const options_list = document.querySelector('.options-list')
const option = document.querySelector('.option')

// Show & hide options list

select.addEventListener('click', () => {
    options_list.classList.toggle('active')
})