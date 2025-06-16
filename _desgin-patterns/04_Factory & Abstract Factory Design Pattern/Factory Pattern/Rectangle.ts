import { IShape } from "./IShape";

export class Rectangle implements IShape {
  draw(): void {
    console.log("Rectangle drawn");
  }
}
