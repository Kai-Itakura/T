import { DECIMAL_TO_INTEGER } from '../setting'
import { state } from '../state'
import { createCommaSeparatedNum } from '../utilMethods'

export default function equalButton(result: HTMLElement) {
  const equalButton = <HTMLButtonElement>document.querySelector('#equal')

  const handleEqualButton = (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof HTMLButtonElement)) {
      return
    }

    if (!state.operator) {
      return
    }

    switch (state.operator) {
      case 'divide':
        state.firstValue = Math.round((state.firstValue / state.secondValue) * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
        createCommaSeparatedNum(result, state.firstValue)
        break

      case 'multiply':
        state.firstValue = Math.round(state.firstValue * state.secondValue * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
        createCommaSeparatedNum(result, state.firstValue)
        break

      case 'minus':
        state.firstValue = Math.round((state.firstValue - state.secondValue) * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
        createCommaSeparatedNum(result, state.firstValue)
        break

      case 'plus':
        state.firstValue = Math.round((state.firstValue + state.secondValue) * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
        createCommaSeparatedNum(result, state.firstValue)
        break
    }

    state.isResult = true
    state.isDecimal = false
    state.isSecondValue = false
    state.isFirstValue = true
  }

  equalButton.addEventListener('click', handleEqualButton)
}
