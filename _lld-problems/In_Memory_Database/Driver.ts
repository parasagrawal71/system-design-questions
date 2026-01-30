import { ColumnType } from "./enums/ColumnType";
import { Column } from "./services/Column";
import { InMemoryDB } from "./services/InMemoryDB";

(function () {
  const dbSystem = new InMemoryDB();

  const userDB = dbSystem.createDatabase("UserDB");

  const usersTable = userDB.createTable("Users", [
    new Column({ name: "id", type: ColumnType.INT, required: true, indexed: true }),
    new Column({ name: "name", type: ColumnType.STRING, required: true, indexed: true }),
    new Column({ name: "age", type: ColumnType.INT }),
  ]);

  console.log("\nInsert:");
  usersTable.insert({ id: 1, name: "Paras", age: 30 });
  usersTable.insert({ id: 2, name: "Amit", age: 25 });
  usersTable.insert({ id: 3, name: "Mohan", age: 28 });
  usersTable.insert({ id: 4, name: "Rahul", age: 27 });
  console.table(usersTable.findAll());

  console.log("\nTable Indexes:");
  console.table(usersTable.getIndexes());

  console.log("\nUpdate:");
  usersTable.update("name", "Paras", "John");
  console.table(usersTable.findAll());

  console.log("\nTable Indexes:");
  console.table(usersTable.getIndexes());

  console.log("\nFind by name:"); // Indexed search
  console.log(usersTable.findBy("name", "Paras"));

  console.log("\nFind by age:"); // Non-indexed search
  console.log(usersTable.findBy("age", 25));

  console.log("\nDelete:");
  usersTable.delete("id", 2);
  console.table(usersTable.findAll());
})();
