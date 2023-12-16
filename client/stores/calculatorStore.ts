import { makeAutoObservable } from 'mobx'

export class CalculatorStore {
  input: string = "797979797979"
  constructor() {
    makeAutoObservable(this)
  }
  setInput(value: string) {
    this.input = value
  }
  
}