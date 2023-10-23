import { state } from '../state'
import { createCommaSeparatedNum } from '../utilMethods'

export default function negativeButton(result: HTMLElement) {
  const negativeButton = <HTMLButtonElement>document.querySelector('#negative')

  const handleNegative = (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof HTMLButtonElement)) {
      return
    }

    if (state.operator && !state.isResult) {
      state.secondValue = -state.secondValue
      createCommaSeparatedNum(result, state.secondValue)
    } else {
      state.firstValue = -state.firstValue
      createCommaSeparatedNum(result, state.firstValue)
    }
  }

  negativeButton?.addEventListener('click', handleNegative)
}
