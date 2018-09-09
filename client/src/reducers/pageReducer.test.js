import pageReducer from "./pageReducer"
import ItemLine from "../models/ItemLine";
import Point from "../models/Point";
import * as actions from "../actions"
import deepFreeze from "../utilities/deepFreeze"
import ItemRectangle from "../models/ItemRectangle";
import ItemCircle from "../models/ItemCircle";

it("move ItemLine", () => {
  const p1 = new Point(3,4);
  const p2 = new Point(5,6);
  const initialState = {
    selectedItems: [
      new ItemLine(p1, p2)
    ]
  }

  deepFreeze(initialState);

  const delta = new Point(10, 20)
  const actionA = actions.moveSelectedItems(delta);

  const stateA = pageReducer(initialState, actionA)
  expect(stateA.selectedItems).toHaveLength(1)
  expect(stateA.selectedItems[0].p1.x).toEqual(3+10)
  expect(stateA.selectedItems[0].p1.y).toEqual(4+20)
  expect(stateA.selectedItems[0].p2.x).toEqual(5+10)
  expect(stateA.selectedItems[0].p2.y).toEqual(6+20)

  deepFreeze(stateA)
  const actionB = actions.moveSelectedItems(new Point(100, 200));
  const stateB = pageReducer(stateA, actionB)
  expect(stateB.selectedItems).toHaveLength(1)
  expect(stateB.selectedItems[0].p1.x).toEqual(3+10+100)
  expect(stateB.selectedItems[0].p1.y).toEqual(4+20+200)

})

it("move ItemRectangle", () => {
  const p1 = new Point(3,4);
  const p2 = new Point(5,6);
  const initialState = {
    selectedItems: [
      new ItemRectangle(p1, p2)
    ]
  }

  deepFreeze(initialState);

  const delta = new Point(10, 20)
  const actionA = actions.moveSelectedItems(delta);
  const stateA = pageReducer(initialState, actionA)
  expect(stateA.selectedItems).toHaveLength(1)
  expect(stateA.selectedItems[0].p1.x).toEqual(3+10)
  expect(stateA.selectedItems[0].p1.y).toEqual(4+20)
  expect(stateA.selectedItems[0].p2.x).toEqual(5+10)
  expect(stateA.selectedItems[0].p2.y).toEqual(6+20)
})

it("move ItemCircle", () => {
  const circle = new ItemCircle(new Point(3,4), 10)
  const initialState = {
    selectedItems: [ circle ]
  }

  deepFreeze(initialState);

  const delta = new Point(10, 20)
  const actionA = actions.moveSelectedItems(delta);
  const stateA = pageReducer(initialState, actionA)
  expect(stateA.selectedItems).toHaveLength(1)
  expect(stateA.selectedItems[0].p.x).toEqual(3+10)
  expect(stateA.selectedItems[0].p.y).toEqual(4+20)
})