import { Module } from '../core/module'

export class MessageModule extends Module {
    trigger() {
        // Просто выводим какое-то диалоговое окно
        alert('Привет! Это модуль, который показывает сообщение.')
    }
}
