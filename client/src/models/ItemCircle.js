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

}

export default ItemCircle;
