import { Module } from '../core/module'
import { random } from '../utils'

export class BackgroundModule extends Module {
    trigger() {
        // Меняем цвет фона body на случайный
        document.body.style.backgroundColor = `rgb(
      ${random(0, 255)},
      ${random(0, 255)},
      ${random(0, 255)}
    )`
    }
}
