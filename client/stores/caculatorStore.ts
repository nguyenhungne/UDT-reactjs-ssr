import { makeAutoObservable } from 'mobx'

export class CalculatorStore {
  constructor() {
    makeAutoObservable(this)
  }

  number = 0
  get square() {
    return this.number * this.number
  }

  increment() {
    this.number++
  }

  decrement() {
    this.number--
  }

  setNumber(number: number) {
    this.number = number
  }
}