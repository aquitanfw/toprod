
const showMoreBtn = document.querySelector('.show-more')
const industryElems = document.querySelectorAll('.solution-item')
const visible = 5

industryElems.forEach((el, i) => {
    console.log('index', i )
    if (i > visible) {
        el.classList.add('hidden')
    }
})




const showAllSpheres = () => {

    if (showMoreBtn.textContent === 'Скрыть') {
        showMoreBtn.textContent = 'Показать все'
    } else {
        showMoreBtn.textContent = 'Скрыть'
    }
    industryElems.forEach((el, i) => {
        if (i > visible) {
            el.classList.toggle('hidden')
        }
    })
}


showMoreBtn.addEventListener('click', () => {
    showAllSpheres()
})