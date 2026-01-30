import { Row } from "../types/types";

export class Index {
  private columnName: string;
  private map: Map<unknown, Set<Row>>;
  /*
    columnName: Column this index is built on
    map: Maps column value → rows having that value
    Set<row>: Handles multiple rows with same value

    For example,
    {
        "Paras" → ( row1, row2 )
    }
  */

  constructor(columnName: string) {
    this.columnName = columnName;
    this.map = new Map();
  }

  // When inserting a new row, we need to update the index
  // add -> index
  index(row: Row) {
    const value = row[this.columnName];
    if (!this.map.has(value)) {
      this.map.set(value, new Set());
    }
    this.map.get(value)?.add(row); // IMP: stores references because not creating a copy
  }

  // When deleting a row, we need to update the index
  // remove -> unindex
  unindex(row: Row) {
    const value = row[this.columnName];
    if (this.map.has(value)) {
      this.map.get(value)?.delete(row); // BUG: Not working as expected
      if (this.map.get(value)?.size === 0) {
        this.map.delete(value);
      }
    }
  }

  // When searching for a value, use the index
  search(value: unknown) {
    return this.map.get(value) ? Array.from(this.map.get(value) || []) : [];
  }

  // Getters
  getMap() {
    return this.map;
  }
}
