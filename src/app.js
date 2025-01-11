// src/app.js

import './styles.css'
import { ContextMenu } from './menu'

// Старые модули
import { ClicksModule } from './modules/clicks.module'
import { AnalyticsClicksModule } from './modules/analytics-clicks.module'
import { ShapeModule } from './modules/shape.module'
import { BackgroundModule } from './modules/background.module'
import { MessageModule } from './modules/message.module'

// Новый модуль
import { TimerModule } from './modules/timer.module'

// Создаём меню
const menu = new ContextMenu('#menu')

// Создаём экземпляры старых модулей
const clicksModule = new ClicksModule('clicks-3s', 'Считать клики (за 3 секунды)')
const analyticsModule = new AnalyticsClicksModule('clicks-analytics', 'Аналитика кликов (5 секунд)')
const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const backgroundModule = new BackgroundModule('background', 'Поменять цвет')
const messageModule = new MessageModule('message', 'Вызвать сообщение')

// Создаём экземпляр нового модуля (Таймер)
const timerModule = new TimerModule('timer', 'Таймер отсчёта')

// Добавляем их в меню
menu.add(clicksModule)
menu.add(analyticsModule)
menu.add(shapeModule)
menu.add(backgroundModule)
menu.add(messageModule)
menu.add(timerModule)

// Отключаем стандартное контекстное меню и показываем кастомное
document.addEventListener('contextmenu', event => {
    event.preventDefault()
    menu.open(event.clientX, event.clientY)
})
