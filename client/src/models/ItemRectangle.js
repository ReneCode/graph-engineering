import Point from "./Point";
import ItemBase from "./ItemBase"
import Line from "./Line";

class ItemRectangle extends ItemBase {
  constructor(p1, p2, options) {
    super(options)

    this.p1 = p1 || new Point()
    this.p2 = p2 || new Point()
  }


  clone() {
    const newRectangle = new ItemRectangle()
    const clone = JSON.parse(JSON.stringify(this))
    Object.assign(newRectangle, clone);
    newRectangle.p1 = this.p1.clone();
    newRectangle.p2 = this.p2.clone();
    return newRectangle
  }

  move(delta) {
    this.p1 = this.p1.add(delta);
    this.p2 = this.p2.add(delta);
  }

  pickDistance(point, radius) {

    // TODO check point inside (boundingbox + radius as border)

    const verticies = this.getVerticies();

    const topLine = new Line(verticies.topLeft, verticies.topRight);
    let result = topLine.pickDistance(point, radius)
    if (result) {
      return result
    }

    const bottomLine = new Line(verticies.bottomLeft, verticies.bottomRight);
    result = bottomLine.pickDistance(point, radius)
    if (result) {
      return result
    }

    const leftLine = new Line(verticies.bottomLeft, verticies.topLeft);
    result = leftLine.pickDistance(point, radius)
    if (result) {
      return result
    }

    const rightLine = new Line(verticies.bottomRight, verticies.topRight);
    result = rightLine.pickDistance(point, radius)
    if (result) {
      return result
    }

    return null;
  }

  // ---------
  
  getVerticies() {
    const minX = Math.min(this.p1.x, this.p2.x)
    const maxX = Math.max(this.p1.x, this.p2.x)
    const minY = Math.min(this.p1.y, this.p2.y)
    const maxY = Math.max(this.p1.y, this.p2.y)
    return {
      topLeft: new Point(minX, maxY),
      topRight: new Point(maxX, maxY),
      bottomLeft: new Point(minX, minY),
      bottomRight: new Point(maxX, minY)
    }
  }

}


export default ItemRectangle
