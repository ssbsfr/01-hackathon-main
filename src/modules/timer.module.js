import { Module } from '../core/module'

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
    }

    trigger() {
        // Шаг 1. Спросим у пользователя время в секундах
        const userInput = prompt('Введите время в секундах', '5')
        const totalTime = parseInt(userInput, 10)

        // Если пользователь ввёл некорректное значение — завершаем
        if (isNaN(totalTime) || totalTime <= 0) {
            alert('Некорректное время')
            return
        }

        // Шаг 2. Создаём блок таймера в углу экрана
        const timerEl = document.createElement('div')
        timerEl.style.position = 'fixed'
        timerEl.style.top = '20px'
        timerEl.style.right = '20px'
        timerEl.style.padding = '10px'
        timerEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        timerEl.style.color = '#fff'
        timerEl.style.fontSize = '18px'
        timerEl.style.borderRadius = '5px'
        timerEl.style.zIndex = '9999'
        timerEl.textContent = `Осталось: ${totalTime} с`

        document.body.append(timerEl)

        // Шаг 3. Запускаем отсчёт
        let remaining = totalTime
        const intervalId = setInterval(() => {
            remaining--
            timerEl.textContent = `Осталось: ${remaining} с`

            if (remaining <= 0) {
                clearInterval(intervalId)
                alert('Время истекло!')
                timerEl.remove()
            }
        }, 1000)
    }
}
