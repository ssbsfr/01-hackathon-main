import './styles.css'

// Меню
import { ContextMenu } from './menu'

// Старый модуль (3 секунды)
import { ClicksModule } from './modules/clicks.module'

// Новый модуль (N секунд, например 5)
import { AnalyticsClicksModule } from './modules/analytics-clicks.module'

// Другие модули
import { ShapeModule } from './modules/shape.module'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message.module'

// Создаём меню
const menu = new ContextMenu('#menu')

// Создаём экземпляр старого модуля (3 секунды)
const clicks3secModule = new ClicksModule('clicks-3s', 'Считать клики (за 3 секунды)')

// Создаём экземпляр нового модуля
const clicksAnalyticsModule = new AnalyticsClicksModule(
    'clicks-analytics',
    'Аналитика кликов (5 секунд)'
)

// Другие модули
const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
const messageModule = new MessageModule('message', 'Вызвать сообщение')

// Добавляем все в наше меню
menu.add(clicks3secModule)
menu.add(clicksAnalyticsModule)
menu.add(shapeModule)
menu.add(backgroundModule)
menu.add(messageModule)

// Отключаем стандартное контекстное меню и показываем кастомное
document.addEventListener('contextmenu', event => {
    event.preventDefault()
    menu.open(event.clientX, event.clientY)
})
