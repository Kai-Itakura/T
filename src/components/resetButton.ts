import { state } from '../state'

export default function resetButton(result: HTMLElement, resetButton: HTMLButtonElement) {
  resetButton.innerText = state.resetButtonText

  const handleReset = (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof HTMLButtonElement)) {
      return
    }

    switch (state.resetButtonText) {
      case 'AC':
        state.selectedElem?.classList.remove('selected')

        Object.assign(state, {
          firstValue: 0,
          secondValue: 0,
          operator: '',
          selectedElem: null,
          isOverThousand: false,
          isDecimal: false,
          isResult: false,
          resetButtonText: 'AC',
        })

        result.innerText = state.firstValue.toString()
        break

      case 'C':
        state.isOverThousand = false
        state.isDecimal = false
        state.resetButtonText = 'AC'
        resetButton.innerText = state.resetButtonText

        if (state.operator && !state.isResult) {
          state.secondValue = 0
          result.innerText = state.secondValue.toString()
        } else {
          state.firstValue = 0
          result.innerText = state.firstValue.toString()
        }
    }
  }

  resetButton.addEventListener('click', handleReset)
}
