import { Module } from '../core/module'

export class VladilenModule extends Module {
    constructor(type, text) {
        super(type, text)
        // Ссылка на YouTube-видео
        this.videoSrc = 'https://www.youtube.com/embed/pkDIxr4hGTo?si=htUzGfjCjpN_oTOj'
    }

    trigger() {
        // 1. Создаём оверлей
        const overlay = document.createElement('div')
        overlay.style.position = 'fixed'
        overlay.style.top = 0
        overlay.style.left = 0
        overlay.style.width = '100%'
        overlay.style.height = '100%'
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
        overlay.style.display = 'flex'
        overlay.style.flexDirection = 'column'   // Делаем вертикальный стек
        overlay.style.alignItems = 'center'
        overlay.style.justifyContent = 'center'
        overlay.style.zIndex = '9999'

        // 2. Внутри оверлея создаём контейнер для iframe
        const videoContainer = document.createElement('div')
        videoContainer.style.backgroundColor = '#000'
        videoContainer.style.width = '560px'
        videoContainer.style.height = '315px'
        videoContainer.style.display = 'flex'
        videoContainer.style.alignItems = 'center'
        videoContainer.style.justifyContent = 'center'
        // Отступ снизу — чтобы оставить место для кнопки
        videoContainer.style.marginBottom = '20px'

        // 3. Создаём iframe
        const iframe = document.createElement('iframe')
        iframe.width = '560'
        iframe.height = '315'
        iframe.src = this.videoSrc
        iframe.title = 'YouTube video player'
        iframe.frameBorder = '0'
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        iframe.referrerPolicy = 'strict-origin-when-cross-origin'
        iframe.allowFullscreen = true

        videoContainer.appendChild(iframe)

        // 4. Создаём кнопку «Закрыть» под видео-блоком
        const closeButton = document.createElement('button')
        closeButton.textContent = 'Закрыть'
        closeButton.style.padding = '10px 20px'
        closeButton.style.fontSize = '16px'
        closeButton.style.border = 'none'
        closeButton.style.borderRadius = '4px'
        closeButton.style.cursor = 'pointer'
        closeButton.style.backgroundColor = '#ff4e4e'
        closeButton.style.color = '#fff'
        // Небольшой отступ сверху, чтобы отделить от видео
        closeButton.style.marginTop = '10px'

        closeButton.addEventListener('click', () => {
            overlay.remove()
        })

        // 5. Собираем всё вместе
        overlay.appendChild(videoContainer)
        overlay.appendChild(closeButton)
        document.body.appendChild(overlay)
    }
}
