const BTN_PLAY = document.getElementById('button-play')
const POPUP_CONTAINER = document.getElementById('popup-container')
const POPUP_VIDEO = document.getElementById('popup-video')

function popupOpenClose(event){
    if(event.target.id === 'button-play'){
        POPUP_CONTAINER.classList.toggle('display_none')
        setTimeout(function(){
            POPUP_VIDEO.play()
        }, 1200)
    }

    if(event.target.id === 'button-close' || event.target.id === 'popup-container'){
        POPUP_VIDEO.pause()
        POPUP_VIDEO.currentTime = 0
        POPUP_CONTAINER.classList.toggle('display_none')
    }
}

document.addEventListener('click', popupOpenClose)