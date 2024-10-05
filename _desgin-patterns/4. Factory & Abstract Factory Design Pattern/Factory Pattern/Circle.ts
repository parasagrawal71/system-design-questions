import { IShape } from "./IShape";

export class Circle implements IShape {
  draw() {
    console.log("Circle drawn");
  }
}
