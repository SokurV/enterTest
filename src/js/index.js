const BTN_PLAY = document.getElementById('button-play')
const POPUP_CONTAINER = document.getElementById('popup-container')
const POPUP_VIDEO = document.getElementById('popup-video')
const FIND_BTN = document.getElementById('find-out-button')
const PRODUCTS_BLOCK = document.getElementById('products') 

function popupOpenClose(event){
    if(event.target.id === 'button-play'){
        POPUP_CONTAINER.classList.toggle('display_none')
        /* setTimeout(function(){
            POPUP_VIDEO.play()
        }, 1200) */
    }

    if(event.target.id === 'button-close' || event.target.id === 'popup-container'){
        /* POPUP_VIDEO.pause()
        POPUP_VIDEO.currentTime = 0 */
        POPUP_CONTAINER.classList.toggle('display_none')
    }
}

function smoothScroll(target){
    window.scrollTo({
        block: "center",
        top: target.offsetTop,
        behavior: "smooth"})
}

document.addEventListener('click', popupOpenClose)
//FIND_BTN.addEventListener('click', smoothScroll.bind(null, PRODUCTS_BLOCK))


