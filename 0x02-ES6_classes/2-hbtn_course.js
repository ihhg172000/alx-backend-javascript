export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      throw new Error('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
