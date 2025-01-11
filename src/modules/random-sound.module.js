import { Module } from '../core/module'
import { random } from '../utils'

export class RandomSoundModule extends Module {
    constructor(type, text) {
        super(type, text)
        // Список звуков (URL). Можно заменить на свои ссылки
        this.sounds = [
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
        ]

        // Текущий аудио-объект (если звук воспроизводится)
        this.currentAudio = null
        // Кнопка «Прервать звук»
        this.stopButton = null
    }

    trigger() {
        // Если уже что-то играет, сначала останавливаем и очищаемся
        if (this.currentAudio && !this.currentAudio.paused) {
            this._stopSound()
            return
        }

        // Если звуков в списке нет — сообщаем
        if (!this.sounds.length) {
            alert('Не найдено звуков для воспроизведения')
            return
        }

        // Выбираем случайный трек
        const index = random(0, this.sounds.length - 1)
        const soundUrl = this.sounds[index]

        // Создаём Audio
        this.currentAudio = new Audio(soundUrl)

        // Создаём кнопку «Прервать звук»
        this.stopButton = document.createElement('button')
        this.stopButton.textContent = 'Прервать звук'
        // Стили: в центр экрана, поверх всего
        this.stopButton.style.position = 'fixed'
        this.stopButton.style.top = '50%'
        this.stopButton.style.left = '50%'
        this.stopButton.style.transform = 'translate(-50%, -50%)'
        this.stopButton.style.padding = '12px 20px'
        this.stopButton.style.fontSize = '16px'
        this.stopButton.style.zIndex = '9999'
        this.stopButton.style.cursor = 'pointer'

        document.body.appendChild(this.stopButton)

        // При клике на кнопку останавливаем звук и убираем кнопку
        this.stopButton.addEventListener('click', () => {
            this._stopSound()
        })

        // Когда трек доигрывает до конца — убираем кнопку
        this.currentAudio.addEventListener('ended', () => {
            this._removeButton()
            this.currentAudio = null
        })

        // Пытаемся воспроизвести
        this.currentAudio.play().catch(err => {
            console.error('Ошибка при воспроизведении звука:', err)
            alert('Ошибка при воспроизведении звука')
            this._removeButton()
            this.currentAudio = null
        })
    }

    // Вспомогательный метод для остановки звука
    _stopSound() {
        if (this.currentAudio) {
            this.currentAudio.pause()
            this.currentAudio.currentTime = 0
            this.currentAudio = null
        }
        this._removeButton()
    }

    // Удаляем кнопку, если она есть
    _removeButton() {
        if (this.stopButton) {
            this.stopButton.remove()
            this.stopButton = null
        }
    }
}
