interface IState {
  firstValue: number
  secondValue: number
  operator: string
  selectedElem: HTMLButtonElement | null
  isOverThousand: boolean
  isDecimal: boolean
  isResult: boolean
  resetButtonText: 'AC' | 'C'
  isFirstValue: boolean
  isSecondValue: boolean
}

export const state: IState = {
  firstValue: 0,
  secondValue: 0,
  operator: '',
  selectedElem: null,
  isOverThousand: false,
  isDecimal: false,
  isResult: false,
  resetButtonText: 'AC',
  isFirstValue: true,
  isSecondValue: false,
}
