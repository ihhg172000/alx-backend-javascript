export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
