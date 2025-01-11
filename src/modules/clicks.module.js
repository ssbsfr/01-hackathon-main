import { Module } from '../core/module'

export class ClicksModule extends Module {
    trigger() {
        let clickCount = 0
        const onClick = () => clickCount++

        // Считаем клики по всему документу
        document.addEventListener('click', onClick)

        // Через 3 секунды убираем слушатель и выводим результат
        setTimeout(() => {
            document.removeEventListener('click', onClick)
            alert(`Вы нажали ${clickCount} раз за 3 секунды!`)
        }, 3000)
    }
}
