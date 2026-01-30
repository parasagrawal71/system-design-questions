import { ColumnType } from "./enums/ColumnType";
import { Column } from "./services/Column";
import { InMemoryDB } from "./services/InMemoryDB";

(function () {
  const dbSystem = new InMemoryDB();

  const userDB = dbSystem.createDatabase("UserDB");

  const usersTable = userDB.createTable("Users", [
    new Column({ name: "id", type: ColumnType.INT, required: true }),
    new Column({ name: "name", type: ColumnType.STRING, required: true }),
    new Column({ name: "age", type: ColumnType.INT }),
  ]);

  usersTable.insert({ id: 1, name: "Paras", age: 30 });
  usersTable.insert({ id: 2, name: "Amit", age: 25 });
  console.table(usersTable.findAll());

  console.log("Find by name:");
  console.log(usersTable.findBy("name", "Paras"));

  usersTable.delete("id", 2);
  console.table(usersTable.findAll());
})();
