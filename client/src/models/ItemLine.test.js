import ItemLine from "./ItemLine";
import Point from "./Point"

it('clone', () => {
  const p1 = new Point(3, 4)
  const p2 = new Point(5, 6)
  const a = new ItemLine(p1, p2)
  const b = a.clone()
  p1.x = 33
  p1.y = 44
  a.highlight = true

  expect(a.p1).toEqual(p1)
  expect(a.p2).toEqual(p2)

  expect(b).toBeInstanceOf(ItemLine)

  expect(b.p1).toEqual(new Point(3,4))
})