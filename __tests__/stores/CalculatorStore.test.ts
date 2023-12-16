import { CalculatorStore } from '../../client/stores/calculatorStore';
import { NumberKey } from '../../client/enums/NumberKey';
import { OperationKey } from '../../client/enums/OperationKey';

describe('CalculatorStore', () => {
  let store: CalculatorStore;
  let localStorageMock: any;

  beforeEach(() => {
    store = new CalculatorStore();
  });
  localStorageMock = (function() {
      let store: { [key: string]: string } = {};
      return {
        getItem(key: string) {
          return store[key] || null;
        },
        setItem(key: string, value: string) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        }
      };
    })();
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });

  it('should initialize with correct defaults', () => {
    expect(store.display).toEqual(NumberKey.ZERO);
    expect(store.store).toEqual(NumberKey.ZERO);
    expect(store.isClickInput).toEqual(false);
  });

  it('should set display and store correctly', () => {
    store.setDisplay('5');
    expect(store.display).toEqual('5');
    expect(store.store).toEqual('5');
  });

  it('should toggle isClickInput correctly', () => {
    store.handleClickInput();
    expect(store.isClickInput).toEqual(true);
    store.handleClickInput();
    expect(store.isClickInput).toEqual(false);
  });

  it('should reset display and store correctly', () => {
    store.setDisplay('5');
    store.resetDisplay();
    expect(store.display).toEqual(NumberKey.ZERO);
    expect(store.store).toEqual(NumberKey.ZERO);
  });

  it('should add to display and store correctly', () => {
    store.addDisplay('5');
    expect(store.display).toEqual('5');
    expect(store.store).toEqual('5');
  });

  it('should calculate correctly', () => {
    store.addDisplay('5');
    store.addDisplay(OperationKey.ADD);
    store.addDisplay('5');
    store.calculate();
    expect(store.display).toEqual('10');
  });
});