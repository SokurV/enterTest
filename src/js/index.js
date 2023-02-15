//const BTN_PLAY = document.getElementById('button-play')
const POPUP_CONTAINER = document.getElementById('popup-container')
const POPUP_VIDEO = document.getElementById('popup-video')
const FIND_BTN = document.getElementById('find-out-button')
const PRODUCTS_BLOCK = document.getElementById('products')
const BURGER_BTN = document.getElementById('burger-button')
const MENU_BLOCK = document.querySelector('.menu')
const CAROUSEL_BTN_LEFT = document.getElementById('carousel-button-left')
const CAROUSEL_BTN_RIGHT = document.getElementById('carousel-button-right')
const CAROUSEL_WINDOW = document.querySelector('.carousel-window')
const CAROUSEL_ITEM = document.querySelector('.carousel__item')

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

document.addEventListener('click', popupOpenClose)

/* function smoothScroll(target){
    window.scrollTo({
        block: "center",
        top: target.offsetTop,
        behavior: "smooth"})
}

FIND_BTN.addEventListener('click', smoothScroll.bind(null, PRODUCTS_BLOCK)) */

function menuItemClick(){
    MENU_BLOCK.classList.remove('display_flex')
    MENU_BLOCK.removeEventListener('click', menuItemClick)
}

BURGER_BTN.addEventListener('click', ()=>{
    MENU_BLOCK.classList.toggle('display_flex')
    MENU_BLOCK.addEventListener('click', menuItemClick)
})

CAROUSEL_BTN_RIGHT.addEventListener("click", () => {
    const ITEM_WIDTH = CAROUSEL_ITEM.clientWidth
    CAROUSEL_WINDOW.scrollLeft += ITEM_WIDTH
})

CAROUSEL_BTN_LEFT.addEventListener("click", () => {
    const ITEM_WIDTH = CAROUSEL_ITEM.clientWidth
    CAROUSEL_WINDOW.scrollLeft -= ITEM_WIDTH
})