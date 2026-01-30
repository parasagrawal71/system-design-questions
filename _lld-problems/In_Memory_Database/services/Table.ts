import { Row } from "../types/types";
import { Column } from "./Column";
import { Index } from "./Index";

export class Table {
  private name: string;
  private columns: Column[];
  private rows: Row[];
  private indexes = new Map<string, Index>();

  constructor(name: string, columns: Column[]) {
    this.name = name;
    this.columns = columns;
    this.rows = [];
    this.indexes = new Map();

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

    this.rows.push({ ...row });

    for (const index of this.indexes.values()) {
      index.index(row);
    }
  }

  delete(columnName: string, value: unknown) {
    // validations: check if column exists, check if value exists

    this.rows = this.rows.filter((row) => {
      // Unindex the row
      if (row[columnName] === value) {
        for (const index of this.indexes.values()) {
          index.unindex(row);
        }
      }

      return row[columnName] !== value;
    });
  }

  findAll(): Row[] {
    return this.rows;
  }

  findBy(columnName: string, value: unknown): Row[] {
    // validations: check if column exists, check if value exists

    // use index if available
    if (this.indexes.has(columnName)) {
      return this.indexes.get(columnName)?.search(value) || [];
    }

    // fallback to full scan
    return this.rows.filter((row) => row[columnName] === value) || [];
  }

  update(columnName: string, value: unknown, newValue: unknown) {
    // validations: check if column exists, check if value exists

    this.rows = this.rows.map((row) => {
      if (row[columnName] === value) {
        // Unindex the row
        for (const index of this.indexes.values()) {
          index.unindex(row);
        }

        row[columnName] = newValue;

        // Index the row
        for (const index of this.indexes.values()) {
          index.index({ ...row });
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
    this.rows.forEach((row) => index.index(row));
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
            value: JSON.stringify(Array.from(index.getMap().get(columnValue) || [])),
          });
        }
      }
    }
    return flattenIndexes;
  }
}
