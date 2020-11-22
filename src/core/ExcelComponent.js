import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubcribers = []

        this.prepare()
    }

    // настраиваем компонент до init
    prepare() {
    }

    // Возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // пПодписываемся на событие event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubcribers.push(unsub)
    }

    // инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент
    // Чистим слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubcribers.forEach(unsub => unsub())
    }
}
