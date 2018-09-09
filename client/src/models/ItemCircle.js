import Point from "./Point";

import ItemBase from "./ItemBase";

class ItemCircle extends ItemBase {
  constructor(p, radius, options) {
    super(options);

    this.p = p || new Point();
    this.radius = radius || 50;
  }

  clone() {
    const newCircle = new ItemCircle()
    const clone = JSON.parse(JSON.stringify(this))
    Object.assign(newCircle, clone)
    newCircle.p = this.p.clone();
    return newCircle
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

  move(delta) {
    this.p = this.p.add(delta);
  }
}

export default ItemCircle;
