export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
  }

  select($el) {
    this.clear()
    this.group.push($el)
    $el.addClass(TableSelection.className)
  }

  clear() {
    this.group.forEach($c => $c.removeClass(TableSelection.className))
    this.group = []
  }

  selectGroup() {
    return ''
  }
}
