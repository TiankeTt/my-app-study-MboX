import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 10;
  constructor() {
    makeAutoObservable(this, { reset: false }, { autoBind: true })
  }
  increment() {
    this.count += 1;
  }
  reset() {
    this.count = 0;
  }
}

export default CounterStore;