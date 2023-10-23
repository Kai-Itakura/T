import { state } from '../state'

export default function decimalPointButton(result: HTMLElement, resetButton: HTMLButtonElement) {
  const decimalPointButton = <HTMLButtonElement>document.querySelector('#decimal-point')

  const handleDecimal = (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof HTMLButtonElement) || state.isDecimal) {
      return
    }

    state.resetButtonText = 'C'
    resetButton.innerText = state.resetButtonText

    // 計算式の右辺の入力時（オペレーションボタンを押す前）
    if (state.isFirstValue && !state.isResult) {
      result.innerText = state.firstValue.toLocaleString() + '.'
    }

    // 計算結果表示後に入力した場合
    if (state.isFirstValue && state.isResult) {
      state.firstValue = 0
      result.innerText = state.firstValue.toString() + '.'
      state.isResult = false
    }

    // 計算式の左辺の入力時（オペレーションボタンを押した後）
    if (state.isSecondValue) {
      result.innerText = state.secondValue.toLocaleString() + '.'
    }

    state.isDecimal = true
  }

  decimalPointButton.addEventListener('click', handleDecimal)
}
