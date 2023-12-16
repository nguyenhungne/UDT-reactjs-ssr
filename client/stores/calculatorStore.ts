import { makeAutoObservable } from 'mobx'
import { ResetKey } from '../enums/ResetKey';
import { NumberKey } from '../enums/NumberKey';
import { OperationKey } from '../enums/OperationKey';

export class CalculatorStore {
  display: string = NumberKey.ZERO
  store: string = NumberKey.ZERO
  constructor() {
    makeAutoObservable(this)
  }
  
  // reset button
  resetDisplay(): void {
    this.display = NumberKey.ZERO
    this.store = NumberKey.ZERO
  }

  // normal button
  addDisplay(value: string): void {
    // truong hop khi bam vao cac dau
    if (value == OperationKey.DIVIDE || value == OperationKey.MULTIPLY || value == OperationKey.ADD || value == OperationKey.SUBTRACT) {
      // check thu o cuoi co phai la dau khong
      if (this.store[this.store.length - 1]== value && this.store.length > 1) {
        this.store = this.store.slice(0, -1) + value
      } 
      // check xem phan tu dau tien phai so khong, cac dau khong
      else if (this.store.length <= 1 && this.store == NumberKey.ZERO ) {
        if (value == OperationKey.SUBTRACT || value == OperationKey.ADD) {
          this.store = value
        }
      }
      else if (this.store.length <= 1 && this.store == OperationKey.ADD || this.store == OperationKey.SUBTRACT) {
        this.store = this.store.slice(0, -1) + value
      }
      else if (this.store.length <= 1 && this.store == OperationKey.DIVIDE || this.store == OperationKey.MULTIPLY) {
        this.store = NumberKey.ZERO
      }
      else {
        this.store += value
      }
    } else if (value == OperationKey.PLUS_MINUS) {
      if (this.store[0] == OperationKey.SUBTRACT) {
        this.store = this.store.slice(1)
        this.display = this.display.slice(1)
      } else {
        this.store = this.store.slice(0,-1) +  OperationKey.SUBTRACT + this.store[this.store.length - 1]
        this.display = OperationKey.SUBTRACT + this.display
      }
    } else if (value == OperationKey.PERCENTAGE) {
      if (this.store[this.store.length - 1] == OperationKey.DIVIDE || this.store[this.store.length - 1] == OperationKey.MULTIPLY || this.store[this.store.length - 1] == OperationKey.ADD || this.store[this.store.length - 1] == OperationKey.SUBTRACT) {
        this.store = this.store.slice(0, -1)
        this.display = this.display.slice(0, -1)
      }
      this.display = (Number(this.display) / 100).toString()
      this.store = this.store.slice(0,-1) + this.display
    }
    else  {
      if (this.store == NumberKey.ZERO) {
        this.display = value
        this.store = value
      }
      else if (this.store[this.store.length - 1] == OperationKey.DIVIDE || this.store[this.store.length - 1] == OperationKey.MULTIPLY || this.store[this.store.length - 1] == OperationKey.ADD || this.store[this.store.length - 1] == OperationKey.SUBTRACT) {
        this.display = value
        this.store += value
      }
      
      else  
      {
        this.display += value
        this.store += value
      }
    } 
  }

  // calculate button
  calculate(): void {
    console.log(this.store)
    if (typeof this.store === 'string') {
      if (this.store.includes(OperationKey.DIVIDE)) {
        this.store = this.store.replace(new RegExp(OperationKey.DIVIDE, 'g'), '/');
      }
      if (this.store.includes(OperationKey.MULTIPLY)) {
        this.store = this.store.replace(new RegExp(OperationKey.MULTIPLY, 'g'), '*');
      }
      if (this.store.includes(OperationKey.ADD)) {
        this.store = this.store.replace(new RegExp(OperationKey.DOT, 'g'), '.');
      }

      if (this.store[this.store.length - 1] == OperationKey.DIVIDE || this.store[this.store.length - 1] == OperationKey.MULTIPLY || this.store[this.store.length - 1] == OperationKey.ADD || this.store[this.store.length - 1] == OperationKey.SUBTRACT) {
        this.store = this.store.slice(0, -1)
      }
      this.display = eval(this.store).toString();
      let results:Array<string> = []
      localStorage.getItem("results") ? results = JSON.parse(localStorage.getItem("results") || "") : results = []
      results.push(this.store + "=" + this.display)
      localStorage.setItem("results", JSON.stringify(results))
      this.store = NumberKey.ZERO
    }
}
}