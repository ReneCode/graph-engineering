import Point from "./Point";

import ItemBase from "./ItemBase";

class ItemCircle extends ItemBase {
  constructor(p, radius) {
    super();

    this.type = "circle";
    this.p = p || new Point();
    this.radius = radius || 50;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  pickDistance(point, pickRadius) {
    const dist = Math.abs(this.p.sub(point).length() - this.radius);
    if (dist <= pickRadius) {
      return { distance: dist };
    } else {
      return null;
    }
  }
}

export default ItemCircle;
