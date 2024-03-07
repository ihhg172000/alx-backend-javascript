export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case 'number':
        return this._size;
      case 'string':
        return this._location;
      default:
        return this;
    }
  }
}
