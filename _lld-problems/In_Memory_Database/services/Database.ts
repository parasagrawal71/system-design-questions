import { Column } from "./Column";
import { Table } from "./Table";

export class Database {
  private name: string;
  private tables: Map<string, Table>;

  constructor(name: string) {
    this.name = name;
    this.tables = new Map();
  }

  createTable(tableName: string, columns: Column[]) {
    if (this.tables.has(tableName)) {
      throw new Error("Table already exists");
    }

    const table = new Table(tableName, columns);
    this.tables.set(tableName, table);
    return table;
  }

  deleteTable(tableName: string) {
    // validations: check if table exists

    return this.tables.delete(tableName);
  }

  getTable(tableName: string) {
    const table = this.tables.get(tableName);
    if (!table) throw new Error("Table not found");
    return table;
  }
}
