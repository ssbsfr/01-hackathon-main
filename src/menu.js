import { Menu } from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        // Вызываем родительский конструктор: он запишет this.el = document.querySelector(selector)
        super(selector)

        // Будем хранить список добавленных модулей
        this.items = []

        // При клике по ul с классом .menu
        this.el.addEventListener('click', event => {
            // С data-атрибута (data-type="...") узнаём, какой модуль вызван
            const { type } = event.target.dataset
            const module = this.items.find(m => m.type === type)
            if (module) {
                module.trigger()
                this.close()
            }
        })
    }

    open(x, y) {
        // Показывать меню имеет смысл только если есть пункты
        if (!this.items.length) {
            return
        }
        this.el.style.top = `${y}px`
        this.el.style.left = `${x}px`
        this.el.classList.add('open')
    }

    close() {
        this.el.classList.remove('open')
    }

    add(module) {
        // Сохраняем модуль в массив
        this.items.push(module)
        // Добавляем HTML в ul#menu
        this.el.insertAdjacentHTML('beforeend', module.toHTML())
    }
}
