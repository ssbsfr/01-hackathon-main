import { Module } from '../core/module'
import { random } from '../utils'

export class CustomMessageModule extends Module {
    constructor(type, text) {
        super(type, text)
        // Список произвольных сообщений (можно дополнить своими)
        this.messages = [
            'Привет Хакатон JS №1!',
            'Это кастомное сообщение!',
            'Улыбнись — всё будет хорошо!',
            'Привет Группа 21 2!',
            'Всем удачи!'
        ]
        // Возможные позиции (углы) для отображения
        this.corners = [
            { top: '10px', left: '10px' },     // Левый верхний
            { top: '10px', right: '10px' },   // Правый верхний
            { bottom: '10px', left: '10px' }, // Левый нижний
            { bottom: '10px', right: '10px' } // Правый нижний
        ]
        // Время, через которое сообщение исчезнет (мс)
        this.displayTime = 3000
    }

    trigger() {
        // 1. Выбираем случайное сообщение из массива
        const msgIndex = random(0, this.messages.length - 1)
        const msgText = this.messages[msgIndex]

        // 2. Выбираем случайную позицию (угол экрана)
        const cornerIndex = random(0, this.corners.length - 1)
        const cornerStyle = this.corners[cornerIndex]

        // 3. Создаём блок для сообщения
        const messageBlock = document.createElement('div')
        messageBlock.textContent = msgText

        // Базовые стили блока
        messageBlock.style.position = 'fixed'
        messageBlock.style.padding = '10px 15px'
        messageBlock.style.fontSize = '14px'
        messageBlock.style.color = '#fff'
        messageBlock.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
        messageBlock.style.borderRadius = '5px'
        messageBlock.style.zIndex = '9999'

        // Применяем координаты выбранного угла
        Object.assign(messageBlock.style, cornerStyle)

        // Добавляем в документ
        document.body.appendChild(messageBlock)

        // 4. Удаляем блок через заданное время
        setTimeout(() => {
            messageBlock.remove()
        }, this.displayTime)
    }
}
