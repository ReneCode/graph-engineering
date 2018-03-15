
// const uuidv1 = require('uuid/v1')

let lastId = 1;

class ItemBase {
  constructor(options) {
    if (options) {
      this.color = options.color;
    }

    this.id = lastId++;
    // this.id = uuidv1()
  }

  // return { distance: 123 }  if pickable
  // else return null
  pickDistance(point, radius) {
    throw new Error("pickDistance method missing")
  }

  change(prop, value) {
    const newObject = this.clone();
    newObject[prop] = value;
    return newObject;
  }
}

export default ItemBase
