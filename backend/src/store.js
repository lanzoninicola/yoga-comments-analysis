export class Store {
  data = new Map();

  constructor() {}

  get(key) {
    return this.data.get(key);
  }

  set(key, value) {
    this.data.set(key, value);
  }
}
