import Point from "./Point";

import ItemBase from "./ItemBase";
import distanceLineToPoint from "../utilities/distanceLineToPoint";

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

  setFromTwoPoints(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  pickDistance(point, radius) {
    const result = distanceLineToPoint(this, point);
    if (result.lambda >= 0 && result.lambda <= 1) {
      if (result.distance <= radius) {
        return { distance: result.distance };
      }
      return null;
    } else {
      if (result.lambda < 0) {
        const deltaP1Point = this.p1.sub(point);
        if (deltaP1Point.length() <= radius) {
          return { distance: result.distance };
        }
      } else {
        const deltaP2Point = this.p2.sub(point);
        if (deltaP2Point.length() <= radius) {
          return { distance: result.distance };
        }
      }
      return null;
    }
  }

}

export default ItemLine;
