import { Column } from "./Column";

type Row = Record<string, unknown>;

export class Table {
  private name: string;
  private columns: Column[];
  private rows: Row[];

  constructor(name: string, columns: Column[]) {
    this.name = name;
    this.columns = columns;
    this.rows = [];
  }

  insert(row: Row) {
    // validate schema
    for (const column of this.columns) {
      column.validate(row[column.getName()]);
    }

    this.rows.push({ ...row });
  }

  delete(columnName: string, value: unknown) {
    // validations: check if column exists, check if value exists

    this.rows = this.rows.filter((row) => row[columnName] !== value);
    return this.rows;
  }

  findAll() {
    return this.rows;
  }

  findBy(columnName: string, value: unknown) {
    // validations: check if column exists, check if value exists

    return this.rows.find((row) => row[columnName] === value);
  }
}
