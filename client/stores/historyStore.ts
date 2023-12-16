import { makeAutoObservable } from 'mobx'

export class HistoryStore {
  history: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addHistory(value: string) {
    this.history.push(value)
  }
}