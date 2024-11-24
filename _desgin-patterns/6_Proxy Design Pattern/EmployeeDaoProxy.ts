import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";
import { EmployeeDaoImpl } from "./EmployeeDaoImpl";

export class EmployeeDaoProxy implements EmployeeDao {
  private employeeDaoObj: EmployeeDao;

  constructor() {
    this.employeeDaoObj = new EmployeeDaoImpl();
  }

  create(client: string, employeeObj: Employee): void {
    if (client === "ADMIN") {
      return this.employeeDaoObj.create(client, employeeObj);
    }

    throw new Error("Access Denied!");
  }

  delete(client: string, employeeId: string): void {
    if (client === "ADMIN") {
      return this.employeeDaoObj.delete(client, employeeId);
    }

    throw new Error("Access Denied!");
  }

  get(client: string, employeeId: string): void {
    if (client === "ADMIN" || client === "USER") {
      return this.employeeDaoObj.get(client, employeeId);
    }

    throw new Error("Access Denied!");
  }
}
