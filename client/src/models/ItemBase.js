
// const uuidv1 = require('uuid/v1')

let lastId = 1;

class ItemBase {
  constructor(option) {
    if (option) {
      this.color = option.color;
    }

    this.id = lastId++;
    // this.id = uuidv1()
  }

  // return { distance: 123 }  if pickable
  // else return null
  pickDistance(point, radius) {
    throw new Error("pickDistance method missing")
  }

  // getResizeData(handleIndex) {
  //   return null
  // }
}

export default ItemBase
