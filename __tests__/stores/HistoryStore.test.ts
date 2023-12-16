import { HistoryStore } from '../../client/stores/historyStore';

describe('HistoryStore', () => {
  let store: HistoryStore;

  beforeEach(() => {
    store = new HistoryStore();
  });

  it('should set historyCalculator correctly', () => {
    const history = ['1+1=2', '2*2=4'];
    store.setHistoryCalculator(history);
    expect(store.historyCalculator).toEqual(history);
  });
});