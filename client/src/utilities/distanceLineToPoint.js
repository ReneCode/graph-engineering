
import Point from "../models/Point";

function distanceLinePoint(line, point) {
  /*
    line: p1, p2
    point: c
  */

  const p1 = { x: line.p1.x, y: line.p1.y, z: 0 };
  const p2 = { x: line.p2.x, y: line.p2.y, z: 0 };
  const c = { x: point.x, y: point.y, z: 0 };

  const delta = {
    x: p2.x - p1.x,
    y: p2.y - p1.y,
    z: p2.z - p1.z
  };
  const k = -(delta.x * c.x + delta.y * c.y + delta.z * c.z)

  const lambda = -(delta.x * p1.x + delta.y * p1.y + delta.z * p1.z + k) / (delta.x * delta.x + delta.y * delta.y + delta.z * delta.z);

  /*
      f = p1 + lambda * delta
  */
  const fPoint = new Point(
    p1.x + lambda * delta.x,
    p1.y + lambda * delta.y
  );

  const distance = fPoint.sub(point).length();

  return {
    lambda,
    fPoint,
    distance
  }
}

export default distanceLinePoint;
