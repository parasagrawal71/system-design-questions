import { Database } from "./Database";

export class InMemoryDB {
  databases: Map<string, Database>;

  constructor() {
    this.databases = new Map();
  }

  createDatabase(dbName: string) {
    if (this.databases.has(dbName)) {
      throw new Error("Database already exists");
    }

    const db = new Database(dbName);
    this.databases.set(dbName, db);
    return db;
  }

  deleteDatabase(dbName: string) {
    // validations: check if database exists

    return this.databases.delete(dbName);
  }

  getDatabase(dbName: string) {
    const db = this.databases.get(dbName);
    if (!db) throw new Error("Database not found");
    return db;
  }
}
