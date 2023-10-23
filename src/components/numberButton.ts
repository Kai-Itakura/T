import { state } from '../state'
import { createCommaSeparatedNum } from '../utilMethods'

export default function numberButton(result: HTMLElement, resetButton: HTMLButtonElement) {
  const numbers: NodeListOf<HTMLElement> = document.querySelectorAll('.numbers')

  numbers.forEach((number) => {
    number.addEventListener('click', (e: MouseEvent) => {
      if (!(e.target instanceof HTMLButtonElement)) {
        return
      }

      state.resetButtonText = 'C'
      resetButton.innerText = state.resetButtonText

      const value = e.target.innerText

      // 計算式の右辺の入力時（オペレーションボタンを押す前）
      if (state.isFirstValue && !state.isResult) {
        getFirstValue(value)
      }

      // 計算結果表示後に入力した場合
      if (state.isFirstValue && state.isResult) {
        state.firstValue = 0
        getFirstValue(value)
        state.isResult = false
      }

      // 計算式の左辺の入力時（オペレーションボタンを押した後）
      if (state.isSecondValue) {
        getSecondValue(value)
      }
    })
  })

  const getFirstValue = (value: string) => {
    if (state.isDecimal) {
      state.firstValue = Number(result.innerText + value)
    } else {
      state.firstValue = Number(state.firstValue.toString() + value)
    }
    createCommaSeparatedNum(result, state.firstValue)
  }

  const getSecondValue = (value: string) => {
    state.selectedElem?.classList.remove('selected')
    if (state.isDecimal) {
      state.secondValue = Number(result.innerText + value)
    } else {
      state.secondValue = Number(state.secondValue.toString() + value)
    }
    createCommaSeparatedNum(result, state.secondValue)
  }
}
