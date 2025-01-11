import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
    trigger() {
        // Создаем элемент div
        const shape = document.createElement('div')
        const size = random(20, 100)

        shape.style.width = `${size}px`
        shape.style.height = `${size}px`
        shape.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        shape.style.position = 'absolute'
        shape.style.top = `${random(0, window.innerHeight - size)}px`
        shape.style.left = `${random(0, window.innerWidth - size)}px`
        // Добавим бордер-радиус, чтобы некоторые фигуры были круглыми
        shape.style.borderRadius = `${random(0, 50)}%`

        document.body.append(shape)
    }
}
