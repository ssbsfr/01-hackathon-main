import './styles.css'
import { ContextMenu } from './menu'

// Другие модули
import { ClicksModule } from './modules/clicks.module'
import { AnalyticsClicksModule } from './modules/analytics-clicks.module'
import { ShapeModule } from './modules/shape.module'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message.module'
import { TimerModule } from './modules/timer.module'
import { RandomSoundModule } from './modules/random-sound.module'

// Подключаем кастомное сообщение
import { CustomMessageModule } from './modules/custom-message.module'

const menu = new ContextMenu('#menu')

// Экземпляры уже созданных модулей
const clicks3secModule = new ClicksModule('clicks-3s', 'Считать клики (3 секунды)')
const analyticsModule = new AnalyticsClicksModule('clicks-analytics', 'Аналитика кликов (5 секунд)')
const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
const messageModule = new MessageModule('message', 'Вызвать сообщение')
const timerModule = new TimerModule('timer', 'Таймер отсчёта')
const randomSoundModule = new RandomSoundModule('random-sound', 'Случайный звук')

// Экземпляр нашего модуля кастомного сообщения
const customMsgModule = new CustomMessageModule('custom-message', 'Кастомное сообщение')

// Добавляем всё в меню
menu.add(clicks3secModule)
menu.add(analyticsModule)
menu.add(shapeModule)
menu.add(backgroundModule)
menu.add(messageModule)
menu.add(timerModule)
menu.add(randomSoundModule)
menu.add(customMsgModule)

// Контекстное меню
document.addEventListener('contextmenu', event => {
    event.preventDefault()
    menu.open(event.clientX, event.clientY)
})
