
// const uuidv1 = require('uuid/v1')

let lastId = 1;

class ItemBase {
  constructor(options) {
    if (options) {
      this.color = options.color;
    }

    this.highlight = false;
    this.id = lastId++;
    // this.id = uuidv1()
  }

  // return { distance: 123 }  if pickable
  // else return null
  pickDistance(point, radius) {
    throw new Error("pickDistance method missing");
  }

  move(delta) {
    throw new Error("move method missing");
  }

  change(prop, value) {
    const newObject = this.clone();
    newObject[prop] = value;
    return newObject;
  }

  setHighlight(highlight = true) {
    this.highlight = highlight
  }

  isHighlighted() {
    return this.highlight;
  }
}

export default ItemBase
