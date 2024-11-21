import { IShape } from "./IShape";
import { ShapeFactory } from "./ShapeFactory";

(function main() {
  const shapeFactory: ShapeFactory = new ShapeFactory();
  const shape: IShape = shapeFactory.getShape("CIRCLE");
  shape.draw();
})();
