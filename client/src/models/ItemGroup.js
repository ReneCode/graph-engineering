
import ItemBase from "./ItemBase";

class ItemGroup extends ItemBase {
  constructor(items = []) {
    super();
    this.items = items;
  }

  clone() {
    const newGroup = new ItemGroup();
    const clone = JSON.parse(JSON.stringify(this))
    Object.assign(newGroup, clone);
    newGroup.items = this.items.map(item => item.clone());
    return newGroup;
  }

  move(delta) {
    const newGroup = this.clone();
    newGroup.items = this.items.map(item => item.move(delta));
    return newGroup;

  }

  pickDistance(point, pickRadius) {
    let minDistance;

    this.items.forEach(item => {
      const dist = item.pickDistance(point, pickRadius);
      if (dist) {
        if (!minDistance) {
          minDistance = dist.distance;
        } else {
          minDistance = Math.min(minDistance, dist.distance);
        }
      }
    });
    if (minDistance) {
      return { distance: minDistance };
    } else {
      return null;
    }
  }
}

export default ItemGroup;
