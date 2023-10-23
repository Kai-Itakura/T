import numberButton from './components/numberButton'
import operationButton from './components/operationButton'
import equalButton from './components/equalButton'
import resetButton from './components/resetButton'
import negativeButton from './components/negativeButton'
import percentButton from './components/percentButton'
import decimalPointButton from './components/decimalPointButton'

export default function main() {
  const resultsElm = <HTMLElement>document.querySelector('.results')
  const resetButtonElm = <HTMLButtonElement>document.querySelector('#reset')

  numberButton(resultsElm, resetButtonElm)
  operationButton()
  equalButton(resultsElm)
  resetButton(resultsElm, resetButtonElm)
  negativeButton(resultsElm)
  percentButton(resultsElm)
  decimalPointButton(resultsElm, resetButtonElm)
}
