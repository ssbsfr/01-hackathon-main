import './styles.css'

// 1) Импортируем наш класс-наследник ContextMenu
import { ContextMenu } from './menu'

// 2) Импортируем наши модули
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message.module'

// 3) Создаём экземпляр контекстного меню
const menu = new ContextMenu('#menu')

// 4) Создаём модули
const clicksModule = new ClicksModule('clicks', 'Считать клики (за 3 секунды)')
const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
const messageModule = new MessageModule('message', 'Вызвать сообщение')

// 5) Добавляем их в наше меню
menu.add(clicksModule)
menu.add(shapeModule)
menu.add(backgroundModule)
menu.add(messageModule)

// 6) Отслеживаем клик правой кнопкой мыши (событие contextmenu) на всём документе
document.addEventListener('contextmenu', event => {
    // ВАЖНО: Отключаем стандартное меню браузера
    event.preventDefault()
    // Координаты клика
    const { clientX, clientY } = event
    // Открываем кастомное меню в нужной точке
    menu.open(clientX, clientY)
})
