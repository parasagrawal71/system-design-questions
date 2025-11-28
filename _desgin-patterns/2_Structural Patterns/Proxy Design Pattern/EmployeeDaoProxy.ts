import { Employee } from "./Employee";
import { IEmployeeDao } from "./IEmployeeDao";
import { EmployeeDaoImpl } from "./EmployeeDaoImpl";

export class EmployeeDaoProxy implements IEmployeeDao {
  private employeeDaoImplObj: IEmployeeDao;

  constructor() {
    this.employeeDaoImplObj = new EmployeeDaoImpl();
  }

  create(client: string, employeeObj: Employee): void {
    if (client === "ADMIN") {
      return this.employeeDaoImplObj.create(client, employeeObj);
    }

    throw new Error("Access Denied!");
  }

  delete(client: string, employeeId: string): void {
    if (client === "ADMIN") {
      return this.employeeDaoImplObj.delete(client, employeeId);
    }

    throw new Error("Access Denied!");
  }

  get(client: string, employeeId: string): void {
    if (client === "ADMIN" || client === "USER") {
      return this.employeeDaoImplObj.get(client, employeeId);
    }

    throw new Error("Access Denied!");
  }
}
