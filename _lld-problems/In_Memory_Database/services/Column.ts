import { ColumnType } from "../enums/ColumnType";

export class Column {
  private name: string;
  private type: ColumnType;
  private required: boolean;

  constructor({ name, type, required = false }: { name: string; type: ColumnType; required?: boolean }) {
    this.name = name;
    this.type = type;
    this.required = required;
  }

  validate(value: unknown) {
    if (value === undefined || value === null) {
      if (this.required) {
        throw new Error(`Column '${this.name}' is required`);
      }
      return;
    }

    if (this.type === "STRING") {
      if (typeof value !== "string" || value.length > 20) {
        throw new Error(`Invalid STRING for '${this.name}'`);
      }
    }

    if (this.type === "INT") {
      if (typeof value !== "number" || value < -1024 || value > 1024) {
        throw new Error(`Invalid INT for '${this.name}'`);
      }
    }
  }

  getName() {
    return this.name;
  }
}
