import { makeAutoObservable } from 'mobx'
import { ResetKey } from '../enums/ResetKey';
import { NumberKey } from '../enums/NumberKey';
import { OperationKey } from '../enums/OperationKey';

export class CalculatorStore {
  display: string = "0"
  store: string = "0"
  constructor() {
    makeAutoObservable(this)
  }
  
  // reset button
  resetDisplay(): void {
    this.display = NumberKey.ZERO
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
    } else if (false) {}
    // khi bam vao so thi chi hien thi so thoi
    else  {
      if (this.store == NumberKey.ZERO) {
        this.display = value
        this.store = value
      } else {
        this.display = value
        this.store += value
      }
    } 
  }



// nhan chia format 8*6 or 8/6 thi ra ket qua luon
// cong tru format 8+6 or 8-6 thi neu tiep theo la dau nhan chia thi khong ra ket qua
// neu tiep theo la dau cong tru thi ra ket qua
  // calculate button
  calculate(): void {
    console.log(this.store)
    if (typeof this.display === 'string') {
      if (this.display.includes(OperationKey.DIVIDE)) {
        this.display = this.display.replace(OperationKey.DIVIDE, '/');
      } 
      if (this.display.includes(OperationKey.MULTIPLY)) {
        this.display = this.display.replace(OperationKey.MULTIPLY, '*');
      } 
      if (this.display.includes(OperationKey.ADD)) {
        this.display = this.display.replace(OperationKey.DOT, '.');
      }
      if (this.display.includes(OperationKey.PLUS_MINUS)) {
        this.display = this.display.replace(OperationKey.ADD, '-');
        this.display = this.display.replace(OperationKey.SUBTRACT, '+');
      }
      
      this.display = eval(this.display).toString();
    }
}
}