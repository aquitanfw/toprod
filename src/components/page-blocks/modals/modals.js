const closeBtn = document.querySelector('.close-cross')
const body = document.body



const closeModals = (frame) => {
    const modals = document.querySelectorAll('.modal')
    modals.forEach(item => item.classList.remove('show'))
    body.classList.remove('body-scroll-block')
    frame.setAttribute('src', '')
}

const openCloseVideoModal = () => {
    let vidoPreview = document.querySelectorAll('.video-previews-item')
    let modalVideo = document.querySelector('.modal-video-trigger')
    let videoIframe = document.querySelector('.video-iframe')

    vidoPreview.forEach(item => {
        item.addEventListener('click', (e) => {
            videoIframe.setAttribute('src', item.dataset.link + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
            modalVideo.classList.add('show')
            body.classList.add('body-scroll-block')
            closeBtn.addEventListener('click', () => {
                videoIframe.setAttribute('src', '')
                closeModals(videoIframe)
            })
        })
    })

}

openCloseVideoModal()

const openCloseHelpModal = () => {
    let modalHelp = document.querySelector('.modal-order-trigger')
    let modalHelpBtn = document.querySelector('.btn-help-call')

    modalHelpBtn.addEventListener('click', () => {
        modalHelp.classList.add('show')
        body.classList.add('body-scroll-block')
    })
    closeBtn.addEventListener('click', () => {
        closeModals()
    })

}

openCloseHelpModal()


const openCloseDealerModal = () => {
    let modalDealer = document.querySelector('.modal-dealers-trigger')
    let modalDealerBtn = document.querySelector('.btn-dealers-call')

    modalDealerBtn.addEventListener('click', () => {
        modalDealer.classList.add('show')
        body.classList.add('body-scroll-block')
    })
    closeBtn.addEventListener('click', () => {
        closeModals()
    })

}

openCloseDealerModal()


const closeModalOnArea = () => {
    const modalLayout = document.querySelectorAll('.modal')

    modalLayout.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation
            console.log('e target', e.target.classList.value)
            e.target.classList.forEach((classListItem) => {
                if (classListItem === 'modal' || e.target.classList.value === 'close-cross'  && e.target.classList !== 'modal-inner') {
                    closeModals()
                }
            })
        })
    })
}
closeModalOnArea()