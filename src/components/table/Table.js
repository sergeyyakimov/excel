import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
    this.$root = $root
  }

  toHtml() {
    return createTable()
  }

  onClick() {
    console.log('click')
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }

  onMousemove() {
    console.log('mousemove')
  }

  onMouseup() {
    console.log('mouseup')
  }
}
