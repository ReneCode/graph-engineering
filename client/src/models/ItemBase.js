
// const uuidv1 = require('uuid/v1')

let lastId = 1;

class ItemBase {
  constructor() {

    this.id = lastId++;
    // this.id = uuidv1()
  }

  // canPick(point, radius) {
  //   throw new Error("canPick method missing")
  // }

  // getResizeData(handleIndex) {
  //   return null
  // }
}

export default ItemBase
