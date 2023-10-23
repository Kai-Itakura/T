import { DECIMAL_TO_INTEGER } from '../setting'
import { state } from '../state'
import { createCommaSeparatedNum } from '../utilMethods'

export default function percentButton(result: HTMLElement) {
  const percentButton = <HTMLButtonElement>document.querySelector('#percent')

  const handlePercent = (e: MouseEvent) => {
    const target = e.target
    if (!(target instanceof HTMLButtonElement)) {
      return
    }

    // 計算式の右辺の入力時（オペレーションボタンを押す前）
    if (state.isFirstValue && !state.isResult) {
      state.firstValue = Math.round((state.firstValue / 100) * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
      createCommaSeparatedNum(result, state.firstValue)
    }
    // 計算式の左辺の入力時（オペレーションボタンを押した後）
    if (state.isSecondValue) {
      state.secondValue = Math.round((state.secondValue / 100) * DECIMAL_TO_INTEGER) / DECIMAL_TO_INTEGER
      createCommaSeparatedNum(result, state.secondValue)
    }
  }

  percentButton.addEventListener('click', handlePercent)
}
