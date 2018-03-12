import Point from "./Point";

import ItemBase from "./ItemBase";

class ItemLine extends ItemBase {
  constructor(p1, p2) {
    super();

    this.type = "line";
    this.p1 = p1 || new Point();
    this.p2 = p2 || new Point();
  }

  setFromTwoPoints(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

}

export default ItemLine;
