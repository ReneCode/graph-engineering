
const pickNearestItem = (items, point, radius) => {
  const pickRadius = 10;
  let minDistance;
  let pickedItem;
  items.forEach(item => {
    const result = item.pickDistance(point, pickRadius);
    if (result) {
      if (pickedItem === undefined) {
        pickedItem = item;
        minDistance = result.distance;
      } else {
        if (result.distance < minDistance) {
          pickedItem = item;
          minDistance = result.distance;
        }
      }
    }
  });

  return pickedItem;
}

export default pickNearestItem;
