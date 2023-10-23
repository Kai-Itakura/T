import { state } from './state'

/**
 * 結果に表示される値を三桁ずつカンマ区切りにする
 * @param result 計算結果を表示するHTMLElement
 * @param value 計算結果に表示される値
 */
export function createCommaSeparatedNum(result: HTMLElement, value: number) {
  const separatedValue = value.toString().split('.')
  const commaSeparatedValue = separatedValue[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  if (separatedValue.length === 1) {
    result.innerText = commaSeparatedValue
    state.isDecimal = false
  } else {
    result.innerText = commaSeparatedValue + '.' + separatedValue[1]
    state.isDecimal = true
  }
  result.innerText = separatedValue.length === 1 ? commaSeparatedValue : commaSeparatedValue + '.' + separatedValue[1]
}
