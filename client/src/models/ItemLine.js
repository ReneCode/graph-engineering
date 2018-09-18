import Point from "./Point";

import ItemBase from "./ItemBase";
import Line from "./Line";

class ItemLine extends ItemBase {
  constructor(p1, p2, option) {
    super(option);

    this.p1 = p1 || new Point();
    this.p2 = p2 || new Point();
  }

  clone() {
    const newLine = new ItemLine()
    const clone = JSON.parse(JSON.stringify(this))
    Object.assign(newLine, clone);
    newLine.p1 = this.p1.clone();
    newLine.p2 = this.p2.clone();
    return newLine
  }

  move(delta) {
    this.p1 = this.p1.add(delta);
    this.p2 = this.p2.add(delta);
    return this;
  }

  setFromTwoPoints(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  pickDistance(point, radius) {
    const line = new Line(this.p1, this.p2)
    return line.pickDistance(point, radius)
  }
}

export default ItemLine;
