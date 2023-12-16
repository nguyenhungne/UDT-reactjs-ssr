import { makeAutoObservable } from 'mobx'

export class HistoryStore {
  historyCalculator: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setHistoryCalculator(history: string[]) {
    this.historyCalculator = history
  }
}