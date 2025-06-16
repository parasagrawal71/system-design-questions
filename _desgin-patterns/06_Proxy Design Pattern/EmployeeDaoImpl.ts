import { Employee } from "./Employee";
import { EmployeeDao } from "./EmployeeDao";

export class EmployeeDaoImpl implements EmployeeDao {
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
