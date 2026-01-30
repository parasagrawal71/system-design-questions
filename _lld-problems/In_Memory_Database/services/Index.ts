import { Row, RowId } from "../types/types";

export class Index {
  private columnName: string;
  private map: Map<unknown, Set<RowId>> = new Map(); // value -> Set<rowId>
  /*
    columnName: Column this index is built on
    map: Maps column value → row ids having that value
    Set<row>: Handles multiple row ids with same value

    For example,
    {
        "Paras" → ( rowId1, rowId2 )
    }
  */

  constructor(columnName: string) {
    this.columnName = columnName;
  }

  // When inserting a new row, we need to update the index
  // add -> index
  index(row: Row, rowId: RowId) {
    const value = row[this.columnName];
    if (!this.map.has(value)) {
      this.map.set(value, new Set());
    }
    this.map.get(value)?.add(rowId);
  }

  // When deleting a row, we need to update the index
  // remove -> unindex
  unindex(row: Row, rowId: RowId) {
    const value = row[this.columnName];
    if (this.map.has(value)) {
      this.map.get(value)?.delete(rowId);
      if (this.map.get(value)?.size === 0) {
        this.map.delete(value);
      }
    }
  }

  // When searching for a value, use the index
  search(value: unknown): RowId[] {
    return this.map.get(value) ? Array.from(this.map.get(value) || []) : [];
  }

  // Getters
  getMap() {
    return this.map;
  }
}
