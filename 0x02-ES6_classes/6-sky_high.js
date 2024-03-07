import Buliding from './5-building';

export default class SkyHighBuilding extends Buliding {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(value) {
    if (typeof value === 'number') {
      this._floors = value;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
