export class TableSelection {
    constructor() {
        this.group = []
    }

    // $el instanceof DOM
    select($el) {
        this.group.push($el)
        $el.addClass('selected')
    }

    selectGroup() {}
}
