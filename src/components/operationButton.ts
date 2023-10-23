import { state } from '../state'

export default function operationButton() {
  const divideButton = <HTMLButtonElement>document.querySelector('#divide')
  const multiplyButton = <HTMLButtonElement>document.querySelector('#multiply')
  const minusButton = <HTMLButtonElement>document.querySelector('#minus')
  const plusButton = <HTMLButtonElement>document.querySelector('#plus')

  const handleOperate = (e: MouseEvent) => {
    const target = e.target
    if (target instanceof HTMLButtonElement) {
      const preSelectedElm = state.selectedElem
      preSelectedElm?.classList.remove('selected')

      target.classList.add('selected')

      state.selectedElem = target
      state.operator = target.id
      state.isDecimal = false
      state.isFirstValue = false
      state.isSecondValue = true
      state.secondValue = 0
    }
  }

  divideButton.addEventListener('click', handleOperate)
  multiplyButton.addEventListener('click', handleOperate)
  minusButton.addEventListener('click', handleOperate)
  plusButton.addEventListener('click', handleOperate)
}
