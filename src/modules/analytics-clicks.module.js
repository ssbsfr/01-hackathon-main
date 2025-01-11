// ❗ Новый модуль: src/modules/analytics-clicks.module.js
import { Module } from '../core/module'
import { random } from '../utils' // если нужно использовать "random", иначе можно удалить

export class AnalyticsClicksModule extends Module {
    constructor(type, text) {
        super(type, text)
        // Например, считаем клики 5 секунд
        this.duration = 5000
        this.isActive = false
    }

    trigger() {
        // Если модуль уже запущен и не успел завершиться, повторно не запускаем
        if (this.isActive) {
            return
        }
        this.isActive = true

        let singleClickCount = 0
        let doubleClickCount = 0

        const handleClick = () => {
            singleClickCount++
        }

        const handleDblClick = () => {
            doubleClickCount++
        }

        // Подписываемся на события
        document.addEventListener('click', handleClick)
        document.addEventListener('dblclick', handleDblClick)

        // Через "this.duration" убираем обработчики и выводим результат
        setTimeout(() => {
            document.removeEventListener('click', handleClick)
            document.removeEventListener('dblclick', handleDblClick)

            // Подсчитаем общее число кликов,
            // считая двойной клик за 2
            const total = singleClickCount + doubleClickCount * 2

            alert(
                `Аналитика кликов за ${this.duration / 1000} секунд:
Одинарных кликов: ${singleClickCount}
Двойных кликов: ${doubleClickCount}
Всего кликов: ${total}`
            )

            // После завершения сбрасываем флаг, чтобы модуль можно было снова вызывать
            this.isActive = false
        }, this.duration)
    }
}
