import { Row, RowId } from "../types/types";
import { Column } from "./Column";
import { Index } from "./Index";

export class Table {
  private name: string;
  private columns: Column[];
  private rows: Map<RowId, Row> = new Map(); // rowId -> row
  private nextRowId = 1;
  private indexes = new Map<string, Index>();

  constructor(name: string, columns: Column[]) {
    this.name = name;
    this.columns = columns;

    // auto-create indexes if column is indexed
    for (const col of columns) {
      if (col.isIndexed()) {
        this.addIndex(col.getName());
      }
    }
  }

  insert(row: Row) {
    // validate schema
    for (const column of this.columns) {
      column.validate(row[column.getName()]);
    }

    this.rows.set(this.nextRowId, row);

    for (const index of this.indexes.values()) {
      index.index(row, this.nextRowId);
    }

    this.nextRowId++;
  }

  delete(columnName: string, value: unknown) {
    // validations: check if column exists, check if value exists

    this.rows.forEach((row, rowId) => {
      // Unindex the row
      if (row[columnName] === value) {
        for (const index of this.indexes.values()) {
          index.unindex(row, rowId);
        }

        this.rows.delete(rowId);
      }
    });
  }

  findAll(): Row[] {
    return Array.from(this.rows.values());
  }

  findBy(columnName: string, value: unknown): Row[] {
    // validations: check if column exists, check if value exists

    // use index if available
    if (this.indexes.has(columnName)) {
      const rowIds = this.indexes.get(columnName)?.search(value);
      return rowIds?.map((id) => this.rows.get(id) as Row).filter(Boolean) || [];
    }

    // fallback to full scan
    return Array.from(this.rows.values()).filter((row) => row[columnName] === value) || [];
  }

  update(columnName: string, value: unknown, newValue: unknown) {
    // validations: check if column exists, check if value exists

    this.rows.forEach((row, rowId) => {
      if (row[columnName] === value) {
        // Unindex the row
        for (const index of this.indexes.values()) {
          index.unindex(row, rowId);
        }

        const newRow = { ...row, [columnName]: newValue };
        this.rows.set(rowId, newRow);

        // Index the row
        for (const index of this.indexes.values()) {
          index.index(newRow, rowId);
        }
      }
      return row;
    });
  }

  // ************ INDEX-RELATED ************

  // add an index and Index the rows
  addIndex(columnName: string) {
    if (this.indexes.has(columnName)) {
      throw new Error("Index already exists");
    }

    const index = new Index(columnName);
    this.rows.forEach((row, rowId) => index.index(row, rowId));
    this.indexes.set(columnName, index);
  }

  // remove an index
  removeIndex(columnName: string) {
    this.indexes.delete(columnName);
  }

  getIndexes() {
    const flattenIndexes = [];
    for (const indexKey of this.indexes.keys()) {
      const index = this.indexes.get(indexKey);
      if (index) {
        for (const columnValue of index.getMap().keys()) {
          flattenIndexes.push({
            index: indexKey,
            columnValue,
            value: Array.from(index.getMap().get(columnValue) || []).join(", "),
          });
        }
      }
    }
    return flattenIndexes;
  }
}
