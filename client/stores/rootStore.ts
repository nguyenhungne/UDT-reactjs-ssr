import { CalculatorStore } from './calculatorStore'
import { HistoryStore } from './historyStore'

export class RootStore {
  calculatorStore: CalculatorStore
  historyStore: HistoryStore

  constructor() {
    this.calculatorStore = new CalculatorStore()
    this.historyStore = new HistoryStore()
  }
}