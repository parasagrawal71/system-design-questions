import { Employee } from "./Employee";
import { IEmployeeDao } from "./IEmployeeDao";

export class EmployeeDaoImpl implements IEmployeeDao {
  create(client: string, employee: Employee): void {
    console.log(`Employee created: ${employee.name}`);
  }

  delete(client: string, employeeId: string): void {
    console.log(`Employee deleted: ${employeeId}`);
  }

  get(client: string, employeeId: string): void {
    console.log(`Employee details fetched: ${employeeId}`);
  }
}
