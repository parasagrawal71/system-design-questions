import { Circle } from "./Circle";
import { IShape } from "./IShape";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

export class ShapeFactory {
  public getShape(shapeType: string): IShape {
    switch (shapeType) {
      case "CIRCLE": // Ideally it should be enum
        return new Circle();
      case "RECTANGLE":
        return new Rectangle();
      case "SQUARE":
        return new Square();
      default:
        throw new Error("Invalid shape type");
    }
  }
}
