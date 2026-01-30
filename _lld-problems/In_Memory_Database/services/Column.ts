import { ColumnType } from "../enums/ColumnType";

export class Column {
  private name: string;
  private type: ColumnType;
  private required: boolean;
  private indexed: boolean;

  constructor({
    name,
    type,
    required = false,
    indexed = false,
  }: {
    name: string;
    type: ColumnType;
    required?: boolean;
    indexed?: boolean;
  }) {
    this.name = name;
    this.type = type;
    this.required = required;
    this.indexed = indexed;
  }

  validate(value: unknown) {
    if (value === undefined || value === null) {
      if (this.required) {
        throw new Error(`Column '${this.name}' is required`);
      }
      return; // Skip validation for undefined or null when not required
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

  isIndexed() {
    return this.indexed;
  }

  // Getters
  getName() {
    return this.name;
  }
}
